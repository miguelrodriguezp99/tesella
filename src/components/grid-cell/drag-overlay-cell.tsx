export const DragOverlayCell = ({ value }: { value: number }) => {
  return (
    <div
      className="grid-cell real-cell dragging"
      style={{
        opacity: 1,
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        zIndex: 999,
      }}
    >
      {value}
    </div>
  );
};
