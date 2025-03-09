import { GridControls } from '../grid-controls/grid-controls';
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { SortableCell } from '../grid-cell/sortable-cell';
import './Grid.css';
import { GridCell } from '../grid-cell/grid-cell';
import { useGrid } from './use-grid';

export const Grid = () => {
  const {
    state: { cells, columns, rows, activeId, activeCell, sensors },
    actions: { handleDragStart, handleDragEnd },
  } = useGrid();
  return (
    <div className="grid-wrapper">
      <GridControls />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={cells} strategy={rectSortingStrategy}>
          <div
            className="grid-container"
            style={{
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
          >
            {cells.map((cell) => (
              <SortableCell key={cell.id} cell={cell} />
            ))}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeId && activeCell ? (
            <GridCell value={activeCell.value} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default Grid;
