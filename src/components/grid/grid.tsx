import { useGridConfig } from '@/providers/grid-provider';
import { useCallback, useEffect, useState } from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import './grid.css';
import { useUpdateWidth } from '@/hooks/use-update-width';
import { Cross } from '@/icons/cross';

export const Grid = () => {
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

  const handleRemoveItem = useCallback(
    (itemId: string, e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();

      const updatedLayout = layout.filter((item) => item.i !== itemId);
      setLayout(updatedLayout);
    },
    [layout, setLayout]
  );

  const margin: [number, number] = [gap, gap];
  const containerHeight = rows * rowHeight + (rows - 1) * gap;

  return (
    <div className="grid-layout-wrapper">
      <div
        className="grid-layout-container"
        style={{ height: `${containerHeight}px` }}
      >
        <div
          className="grid-layout-background"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, ${rowHeight}px)`,
            gap: `${gap}px`,
            height: `${containerHeight}px`,
          }}
        >
          {Array.from({ length: cols * rows }).map((_, index) => (
            <div
              key={index}
              className="grid-layout-background__cell"
              onClick={() => handleCellClick(index % cols, index)}
            />
          ))}
        </div>

        <GridLayout
          style={{
            zIndex: 'auto',
            position: 'absolute',
          }}
          className="grid-layout"
          layout={layout}
          cols={cols}
          rowHeight={rowHeight}
          width={containerWidth}
          containerPadding={[0, 0]}
          onLayoutChange={handleLayoutChange}
          isResizable={true}
          isDraggable={true}
          resizeHandles={['se']}
          margin={margin}
          maxRows={rows}
          compactType={null}
        >
          {layout.map((item) => (
            <div key={item.i} className="grid-layout__item">
              <div className="grid-layout__item-content">{item.i}</div>
              <button
                className="grid-layout__item-remove"
                onClick={(e) => handleRemoveItem(item.i, e)}
                aria-label="Remove item"
              >
                <Cross />
              </button>
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  );
};
