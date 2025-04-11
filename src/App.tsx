import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './App.css';
import { Grid } from './components/grid/grid';
import { Controls } from './components/controls/controls';
import { Hero } from './components/hero/hero';
import { Toaster } from 'sonner';
import { Codes } from './components/codes/codes';
import { SeoWrapper } from './components/seo/seo-wrapper';

const App = () => {
  return (
    <SeoWrapper>
      <div className="app-container">
        <Hero />
        <Controls />
        <Grid />
        <div className="sphere sphere-2 radial-gradient"></div>
        <div className="sphere sphere-3 radial-gradient"></div>
        <Codes />
        <Toaster position="top-center" />
      </div>
    </SeoWrapper>
  );
};

export default App;
