import './grid-cell.css';
export const DragOverlayCell = ({ value }: { value: number }) => {
  return <div className="grid-cell real-cell dragging">{value}</div>;
};
