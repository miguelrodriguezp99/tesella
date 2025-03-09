import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GridState {
  columns: number;
  rows: number;
  gap: number;
}

interface GridActions {
  increaseColumns: () => void;
  decreaseColumns: () => void;
  increaseRows: () => void;
  decreaseRows: () => void;
  increaseGap: () => void;
  decreaseGap: () => void;
}

interface GridContextType {
  state: GridState;
  actions: GridActions;
}

const INITIAL_COLS = 6;
const INITIAL_ROWS = 6;
const MAX_GRID_SIZE = 12;
const MIN_GRID_SIZE = 1;
const INITIAL_GAP_SIZE = 8;

const GridContext = createContext<GridContextType | undefined>(undefined);

interface GridProviderProps {
  children: ReactNode;
  initialCols?: number;
  initialRows?: number;
  initialGap?: number;
}

export const GridProvider: React.FC<GridProviderProps> = ({
  children,
  initialCols = INITIAL_COLS,
  initialRows = INITIAL_ROWS,
  initialGap = INITIAL_GAP_SIZE,
}) => {
  const [columns, setColumns] = useState<number>(initialCols);
  const [rows, setRows] = useState<number>(initialRows);
  const [gap, setGap] = useState<number>(initialGap);

  const increaseColumns = () => {
    if (columns < MAX_GRID_SIZE) {
      setColumns(columns + 1);
    }
  };

  const decreaseColumns = () => {
    if (columns > MIN_GRID_SIZE) {
      setColumns(columns - 1);
    }
  };

  const increaseRows = () => {
    if (rows < MAX_GRID_SIZE) {
      setRows(rows + 1);
    }
  };

  const decreaseRows = () => {
    if (rows > MIN_GRID_SIZE) {
      setRows(rows - 1);
    }
  };

  const increaseGap = () => {
    setGap(gap + 1);
  };

  const decreaseGap = () => {
    if (gap > 0) {
      setGap(gap - 1);
    }
  };

  const value = {
    state: {
      columns,
      rows,
      gap,
    },
    actions: {
      increaseColumns,
      decreaseColumns,
      increaseRows,
      decreaseRows,
      increaseGap,
      decreaseGap,
    },
  };

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGridContext = (): GridContextType => {
  const context = useContext(GridContext);

  if (context === undefined) {
    throw new Error('useGrid must be used within a GridProvider');
  }

  return context;
};
