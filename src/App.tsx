import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './App.css';
import { Grid } from './components/grid/grid';
import { Controls } from './components/controls/controls';

const App = () => {
  return (
    <div className="app-container">
      <Controls />
      <Grid />
    </div>
  );
};

export default App;
