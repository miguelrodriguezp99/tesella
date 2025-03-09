import { useGridContext } from '@/providers/grid-provider';
import {
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import { Cell, EmptyCell, GridItem } from '../grid-cell/sortable-cell';

export const useGrid = () => {
  const {
    state: { columns, rows },
  } = useGridContext();

  const totalCells = columns * rows;

  const [gridItems, setGridItems] = useState<GridItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // Create one real cell
    const realCell: Cell = {
      id: 'cell-1',
      value: 1,
      position: 0,
    };

    // Create empty cells for the rest of the grid
    const emptyCells: EmptyCell[] = Array.from(
      { length: totalCells - 1 },
      (_, i) => ({
        id: `empty-${i + 1}`,
        position: i + 1,
        isEmpty: true,
      })
    );

    // Combine and set
    setGridItems([realCell, ...emptyCells]);
  }, [totalCells, columns, rows]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over) return;

    if (active.id !== over.id) {
      setGridItems((items) => {
        // Find the indices
        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over.id);

        if (activeIndex === -1 || overIndex === -1) return items;

        // Create a new array with the items rearranged
        const newItems = [...items];

        // Get the active item
        const activeItem = { ...newItems[activeIndex] };
        const overItem = { ...newItems[overIndex] };

        // Update positions
        activeItem.position = overIndex;
        overItem.position = activeIndex;

        // Swap the items
        newItems[activeIndex] = overItem;
        newItems[overIndex] = activeItem;

        return newItems;
      });
    }
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
      isRealCellActive,
      sensors,
      gridItems,
      activeItem,
    },
    actions: {
      handleDragStart,
      handleDragEnd,
    },
  };
};
