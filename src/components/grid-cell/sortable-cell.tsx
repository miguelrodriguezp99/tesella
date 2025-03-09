import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './grid-cell.css';

export interface Cell {
  id: string;
  value: number;
}

export const SortableCell = ({ cell }: { cell: Cell }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: cell.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`grid-cell ${isDragging ? 'dragging' : ''}`}
      {...attributes}
      {...listeners}
    >
      {cell.value}
    </div>
  );
};
