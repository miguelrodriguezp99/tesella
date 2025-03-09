import { useGridContext } from '@/providers/grid-provider';
import {
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import { Cell, EmptyCell, GridItem } from '../grid-cell/sortable-cell';

export const useGrid = () => {
  const {
    state: { columns, rows, gap },
  } = useGridContext();

  const totalCells = columns * rows;

  const [gridItems, setGridItems] = useState<GridItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [nextValue, setNextValue] = useState<number>(2);

  useEffect(() => {
    const realCell: Cell = {
      id: 'cell-1',
      value: 1,
      position: 0,
    };

    const emptyCells: EmptyCell[] = Array.from(
      { length: totalCells - 1 },
      (_, i) => ({
        id: `empty-${i + 1}`,
        position: i + 1,
        isEmpty: true,
      })
    );

    setGridItems([realCell, ...emptyCells]);
    setNextValue(2);
  }, [totalCells, columns, rows]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    const item = gridItems.find((item) => item.id === active.id);
    if (item && !('isEmpty' in item)) {
      setActiveId(active.id as string);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over) return;

    if (active.id !== over.id) {
      setGridItems((items) => {
        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over.id);

        if (activeIndex === -1 || overIndex === -1) return items;

        const newItems = [...items];

        [newItems[activeIndex], newItems[overIndex]] = [
          newItems[overIndex],
          newItems[activeIndex],
        ];

        return newItems;
      });
    }
  };

  const handleEmptyCellClick = (cellId: string) => {
    setGridItems((items) => {
      const index = items.findIndex((item) => item.id === cellId);
      if (index === -1) return items;
      const item = items[index];

      if (!('isEmpty' in item)) return items;

      const newItems = [...items];

      newItems[index] = {
        id: cellId,
        value: nextValue,
        position: item.position,
      };

      setNextValue(nextValue + 1);

      return newItems;
    });
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { over } = event;
    setHoveredId(over ? (over.id as string) : null);
  };

  const activeItem = activeId
    ? gridItems.find((item) => item.id === activeId)
    : null;
  const isRealCellActive = activeItem && !('isEmpty' in activeItem);

  return {
    state: {
      columns,
      rows,
      activeId,
      hoveredId,
      isRealCellActive,
      sensors,
      gridItems,
      activeItem,
      gap,
    },
    actions: {
      handleDragStart,
      handleDragEnd,
      handleDragOver,
      handleEmptyCellClick,
    },
  };
};
