import { useGridConfig } from '@/providers/grid-provider';
import './controls.css';

export const Controls = () => {
  const {
    cols,
    rows,
    rowHeight,
    gap,
    incrementCols,
    decrementCols,
    incrementRows,
    decrementRows,
    incrementRowHeight,
    decrementRowHeight,
    incrementGap,
    decrementGap,
  } = useGridConfig();

  return (
    <div className="grid-controls">
      <div className="grid-controls__control">
        <span className="grid-controls__label">Columns: {cols}</span>
        <div className="grid-controls__buttons">
          <button
            className="grid-controls__button grid-controls__button--decrement"
            onClick={decrementCols}
            disabled={cols <= 1}
          >
            -
          </button>
          <button
            className="grid-controls__button grid-controls__button--increment"
            onClick={incrementCols}
            disabled={cols >= 12}
          >
            +
          </button>
        </div>
      </div>

      <div className="grid-controls__control">
        <span className="grid-controls__label">Rows: {rows}</span>
        <div className="grid-controls__buttons">
          <button
            className="grid-controls__button grid-controls__button--decrement"
            onClick={decrementRows}
            disabled={rows <= 1}
          >
            -
          </button>
          <button
            className="grid-controls__button grid-controls__button--increment"
            onClick={incrementRows}
            disabled={rows >= 12}
          >
            +
          </button>
        </div>
      </div>

      <div className="grid-controls__control">
        <span className="grid-controls__label">Row Height: {rowHeight}px</span>
        <div className="grid-controls__buttons">
          <button
            className="grid-controls__button grid-controls__button--decrement"
            onClick={decrementRowHeight}
            disabled={rowHeight <= 1}
          >
            -
          </button>
          <button
            className="grid-controls__button grid-controls__button--increment"
            onClick={incrementRowHeight}
          >
            +
          </button>
        </div>
      </div>

      <div className="grid-controls__control">
        <span className="grid-controls__label">Gap: {gap}px</span>
        <div className="grid-controls__buttons">
          <button
            className="grid-controls__button grid-controls__button--decrement"
            onClick={decrementGap}
            disabled={gap <= 0}
          >
            -
          </button>
          <button
            className="grid-controls__button grid-controls__button--increment"
            onClick={incrementGap}
            disabled={gap >= 30}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
