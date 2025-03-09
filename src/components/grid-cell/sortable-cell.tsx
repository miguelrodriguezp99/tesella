import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './grid-cell.css';

export interface Cell {
  id: string;
  value: number;
  position: number;
}

export interface EmptyCell {
  id: string;
  position: number;
  isEmpty: true;
}

export type GridItem = Cell | EmptyCell;

export const SortableCell = ({ item }: { item: GridItem }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1 : 0,
  };

  const isRealCell = !('isEmpty' in item);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`grid-cell ${isRealCell ? 'real-cell' : 'empty-cell'} ${
        isDragging ? 'dragging' : ''
      }`}
      {...attributes}
      {...listeners}
    >
      {isRealCell ? item.value : '-'}
    </div>
  );
};
