import GridLayout from 'react-grid-layout';
import './grid.css';
import { Cross } from '@/icons/cross';
import { useGrid } from './use-grid';

export const Grid = () => {
  const {
    actions: { handleLayoutChange, handleCellClick, handleRemoveItem },
    state: {
      containerHeight,
      containerWidth,
      margin,
      layout,
      cols,
      rows,
      rowHeight,
      gap,
    },
  } = useGrid();

  console.log('Grid layout:', layout);

  return (
    <div className="grid-layout-wrapper">
      <div
        className="grid-layout-container"
        style={{ height: `${containerHeight}px` }}
      >
        <div
          className="grid-layout-background"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, ${rowHeight}px)`,
            gap: `${gap}px`,
            height: `${containerHeight}px`,
          }}
        >
          {Array.from({ length: cols * rows }).map((_, index) => (
            <div
              key={index}
              className="grid-layout-background__cell"
              onClick={() => handleCellClick(index % cols, index)}
            />
          ))}
        </div>

        <GridLayout
          style={{
            zIndex: 'auto',
            position: 'absolute',
          }}
          className="grid-layout"
          layout={layout}
          cols={cols}
          rowHeight={rowHeight}
          width={containerWidth}
          containerPadding={[0, 0]}
          onLayoutChange={handleLayoutChange}
          isResizable={true}
          isDraggable={true}
          resizeHandles={['se']}
          margin={margin}
          maxRows={rows}
          compactType={null}
        >
          {layout.map((item) => (
            <div key={item.i} className="grid-layout__item">
              <div className="grid-layout__item-content">{item.i}</div>
              <button
                className="grid-layout__item-remove"
                onClick={(e) => handleRemoveItem(item.i, e)}
                aria-label="Remove item"
              >
                <Cross />
              </button>
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  );
};
