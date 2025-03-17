import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { GridConfigProvider } from './providers/grid-provider';

//set class dark in body
document.documentElement.classList.add('dark');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GridConfigProvider
      initialCols={5}
      initialRowHeight={100}
      initialGap={10}
      initialRows={5}
    >
      <App />
    </GridConfigProvider>
  </StrictMode>
);
