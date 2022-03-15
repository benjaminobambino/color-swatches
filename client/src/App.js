import './styles/App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Swatches from './components/swatches/Swatches';
import Detail from './components/detail/Detail';
import useData from './hooks/useData';

function App() {
  const [swatches, setSwatches] = useState([]);

  useData('swatches/', setSwatches);

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Sidebar swatches={swatches} />
        <Routes>
          <Route
            path="/"
            element={<Swatches swatches={swatches} swatchLimit={12} />}
          />
          <Route path="/:swatchId" element={<Detail />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
