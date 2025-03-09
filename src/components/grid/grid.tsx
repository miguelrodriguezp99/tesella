import { useGrid } from '@/providers/grid-provider';
import { GridControls } from './grid-controls';
import './Grid.css';

export const Grid = () => {
  const {
    state: { columns, rows },
  } = useGrid();

  return (
    <div className="grid-wrapper">
      <GridControls />

      <div
        className="grid-container"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array(rows * columns)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="grid-cell"></div>
          ))}
      </div>
    </div>
  );
};

export default Grid;
