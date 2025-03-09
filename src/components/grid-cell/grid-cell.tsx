import './grid-cell.css';
export const GridCell = ({ value }: { value: number }) => {
  return <div className="grid-cell dragging">{value}</div>;
};
