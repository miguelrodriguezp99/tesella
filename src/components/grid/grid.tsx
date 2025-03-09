import { GridControls } from '../grid-controls/grid-controls';
import { closestCenter, DndContext, DragOverlay } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { Cell, SortableCell } from '../grid-cell/sortable-cell';
import { useGrid } from './use-grid';
import { DragOverlayCell } from '../grid-cell/drag-overlay-cell';
import './Grid.css';

export const Grid = () => {
  const {
    state: {
      columns,
      rows,
      activeId,
      gridItems,
      sensors,
      isRealCellActive,
      activeItem,
    },
    actions: { handleDragStart, handleDragEnd },
  } = useGrid();
  return (
    <div className="grid-wrapper">
      <GridControls />

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
      >
        <SortableContext items={gridItems} strategy={rectSortingStrategy}>
          <div
            className="grid-container"
            style={{
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
          >
            {gridItems
              .sort((a, b) => a.position - b.position)
              .map((item) => (
                <SortableCell key={item.id} item={item} />
              ))}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeId && isRealCellActive ? (
            <DragOverlayCell value={(activeItem as Cell).value} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default Grid;
