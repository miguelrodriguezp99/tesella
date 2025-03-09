import { useGrid } from '@/providers/grid-provider';
import { Button } from '../button/button';

export const GridControls = () => {
  const {
    state: { columns, rows },
    actions: { increaseColumns, decreaseColumns, increaseRows, decreaseRows },
  } = useGrid();

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
    </div>
  );
};
