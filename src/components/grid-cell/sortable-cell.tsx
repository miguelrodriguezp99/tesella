import { useSortable } from '@dnd-kit/sortable';

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

interface SortableCellProps {
  item: GridItem;
  onEmptyCellClick?: (cellId: string) => void;
  isSwapping?: boolean;
  isHovered?: boolean;
}

export const SortableCell = ({
  item,
  onEmptyCellClick,
  isSwapping,
  isHovered,
}: SortableCellProps) => {
  const isRealCell = !('isEmpty' in item);

  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: item.id,
    disabled: !isRealCell,
    transition: {
      duration: 200,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
  });

  const style = {
    ...(isDragging && isRealCell ? { opacity: 0.1 } : { opacity: 1 }),
    transform: 'translate3d(0, 0, 0)',
    zIndex: isDragging ? 10 : isSwapping ? 5 : 0,
  };

  const handleCellClick = () => {
    if (!isRealCell && onEmptyCellClick) {
      onEmptyCellClick(item.id);
    }
  };

  return (
    <div
      onClick={handleCellClick}
      ref={setNodeRef}
      style={style}
      className={`grid-cell ${isRealCell ? 'real-cell' : 'empty-cell'} ${
        isDragging ? 'dragging' : ''
      } ${isSwapping ? 'swapping' : ''} ${isHovered ? 'hovered' : ''}`}
      {...(isRealCell ? attributes : {})}
      {...(isRealCell ? listeners : {})}
    >
      {isRealCell ? item.value : '+'}
    </div>
  );
};
