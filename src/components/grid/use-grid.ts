import { useUpdateWidth } from '@/hooks/use-update-width';
import { useGridConfig } from '@/providers/grid-provider';
import { useCallback, useEffect, useState } from 'react';
import { Layout } from 'react-grid-layout';

export const useGrid = () => {
  const { cols, rows, rowHeight, gap, layout, setLayout } = useGridConfig();
  const containerWidth = useUpdateWidth();
  const [nextId, setNextId] = useState(2);

  const handleLayoutChange = useCallback(
    (newLayout: Layout[]) => {
      const adjustedLayout = newLayout.map((item) => {
        const itemBottom = item.y + item.h;

        if (itemBottom > rows) {
          const newY = Math.max(0, rows - item.h);
          return { ...item, y: newY };
        }

        return item;
      });

      setLayout(adjustedLayout);
    },
    [rows, setLayout]
  );

  const handleCellClick = (colIndex: number, rowIndex: number) => {
    const x = colIndex % cols;
    const y = Math.floor(rowIndex / cols);

    const isOccupied = layout.some((item) => {
      return (
        x >= item.x && x < item.x + item.w && y >= item.y && y < item.y + item.h
      );
    });

    if (!isOccupied && y < rows) {
      const newItem = {
        i: nextId.toString(),
        x,
        y,
        w: 1,
        h: 1,
      };

      setNextId(nextId + 1);
      setLayout([...layout, newItem]);
    }
  };

  const handleRemoveItem = useCallback(
    (itemId: string, e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();

      const updatedLayout = layout.filter((item) => item.i !== itemId);
      setLayout(updatedLayout);
    },
    [layout, setLayout]
  );

  useEffect(() => {
    const adjustedLayout = layout.map((item) => {
      const itemBottom = item.y + item.h;
      if (itemBottom > rows) {
        return { ...item, y: Math.max(0, rows - item.h) };
      }
      return item;
    });

    if (JSON.stringify(adjustedLayout) !== JSON.stringify(layout)) {
      setLayout(adjustedLayout);
    }
  }, [rows, layout, setLayout]);

  const margin: [number, number] = [gap, gap];
  const containerHeight = rows * rowHeight + (rows - 1) * gap;

  return {
    actions: {
      handleLayoutChange,
      handleCellClick,
      handleRemoveItem,
    },
    state: {
      containerHeight,
      containerWidth,
      margin,
      layout,
      cols,
      rows,
      rowHeight,
      gap,
    },
  };
};
