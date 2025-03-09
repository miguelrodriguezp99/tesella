import './App.css';
import { Grid } from './components/grid/grid';
import { Hero } from './components/hero/hero';
import { GridProvider } from './providers/grid-provider';

function App() {
  return (
    <GridProvider>
      <Hero />
      <Grid />
    </GridProvider>
  );
}

export default App;
