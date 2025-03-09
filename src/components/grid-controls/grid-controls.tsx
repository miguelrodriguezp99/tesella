import { useGridContext } from '@/providers/grid-provider';
import { Button } from '../button/button';

import './grid-controls.css';

export const GridControls = () => {
  const {
    state: { columns, rows, gap },
    actions: {
      increaseColumns,
      decreaseColumns,
      increaseRows,
      decreaseRows,
      increaseGap,
      decreaseGap,
    },
  } = useGridContext();

  return (
    <div className="grid-controls">
      <div className="control-section">
        <h3>Columns: {columns}</h3>
        <div className="button-group">
          <Button onClick={decreaseColumns} disabled={columns <= 1}>
            -
          </Button>
          <Button onClick={increaseColumns} disabled={columns >= 12}>
            +
          </Button>
        </div>
      </div>
      <div className="control-section">
        <h3>Rows: {rows}</h3>
        <div className="button-group">
          <Button onClick={decreaseRows} disabled={rows <= 1}>
            -
          </Button>
          <Button onClick={increaseRows} disabled={rows >= 12}>
            +
          </Button>
        </div>
      </div>
      <div className="control-section">
        <h3>Gap: {gap}</h3>
        <div className="button-group">
          <Button onClick={decreaseGap} disabled={gap <= 0}>
            -
          </Button>
          <Button onClick={increaseGap}>+</Button>
        </div>
      </div>
    </div>
  );
};
