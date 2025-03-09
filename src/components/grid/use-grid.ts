import { useGridContext } from '@/providers/grid-provider';
import {
  DragEndEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';
import { Cell } from '../grid-cell/sortable-cell';

export const useGrid = () => {
  const {
    state: { columns, rows },
  } = useGridContext();

  const totalCells = columns * rows;

  const [cells, setCells] = useState<Cell[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    setCells(
      Array.from({ length: totalCells }, (_, i) => ({
        id: `cell-${i}`,
        value: i + 1,
      }))
    );
  }, [totalCells, columns, rows]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    if (active.id !== over.id) {
      setCells((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const activeCell = activeId
    ? cells.find((cell) => cell.id === activeId)
    : null;

  return {
    state: {
      columns,
      rows,
      cells,
      activeId,
      activeCell,
      sensors,
    },
    actions: {
      handleDragStart,
      handleDragEnd,
    },
  };
};
