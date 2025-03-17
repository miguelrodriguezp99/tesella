import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Layout } from 'react-grid-layout';

const MAX_COLS = 12;
const MAX_ROWS = 12;
const MAX_GAP = 30;

interface GridConfigContextType {
  cols: number;
  rows: number;
  rowHeight: number;
  gap: number;
  layout: Layout[];
  setLayout: (layout: Layout[]) => void;
  incrementCols: () => void;
  decrementCols: () => void;
  incrementRows: () => void;
  decrementRows: () => void;
  incrementRowHeight: () => void;
  decrementRowHeight: () => void;
  incrementGap: () => void;
  decrementGap: () => void;
}

const GridConfigContext = createContext<GridConfigContextType | undefined>(
  undefined
);

interface GridConfigProviderProps {
  children: ReactNode;
  initialCols?: number;
  initialRows?: number;
  initialRowHeight?: number;
  initialGap?: number;
}

export const GridConfigProvider: React.FC<GridConfigProviderProps> = ({
  children,
  initialCols = 12,
  initialRows = 10,
  initialRowHeight = 100,
  initialGap = 10,
}) => {
  const [cols, setCols] = useState<number>(Math.min(initialCols, MAX_COLS));
  const [rows, setRows] = useState<number>(Math.min(initialRows, MAX_ROWS));
  const [rowHeight, setRowHeight] = useState<number>(initialRowHeight);
  const [gap, setGap] = useState<number>(Math.min(initialGap, MAX_GAP));

  const [layout, setLayout] = useState<Layout[]>([
    { i: '1', x: 0, y: 0, w: 1, h: 1 },
  ]);

  const incrementCols = () => {
    setCols((prev) => Math.min(prev + 1, MAX_COLS));
  };

  const decrementCols = () => {
    setCols((prev) => Math.max(prev - 1, 1));
  };

  const incrementRows = () => {
    setRows((prev) => Math.min(prev + 1, MAX_ROWS));
  };

  const decrementRows = () => {
    setRows((prev) => Math.max(prev - 1, 1));
  };

  const incrementRowHeight = () => {
    setRowHeight((prev) => prev + 1);
  };

  const decrementRowHeight = () => {
    setRowHeight((prev) => Math.max(prev - 1, 1));
  };

  const incrementGap = () => {
    setGap((prev) => Math.min(prev + 1, MAX_GAP));
  };

  const decrementGap = () => {
    setGap((prev) => Math.max(prev - 1, 0));
  };

  const value = {
    cols,
    rows,
    rowHeight,
    gap,
    layout,
    setLayout,
    incrementCols,
    decrementCols,
    incrementRows,
    decrementRows,
    incrementRowHeight,
    decrementRowHeight,
    incrementGap,
    decrementGap,
  };

  return (
    <GridConfigContext.Provider value={value}>
      {children}
    </GridConfigContext.Provider>
  );
};

export const useGridConfig = (): GridConfigContextType => {
  const context = useContext(GridConfigContext);
  if (context === undefined) {
    throw new Error('useGridConfig must be used within a GridConfigProvider');
  }
  return context;
};
