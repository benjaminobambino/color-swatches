import './styles/App.css';
import { useState, useEffect } from 'react';
import Client from './services/api';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Swatches from './components/swatches/Swatches';
import Detail from './components/detail/Detail';

function App() {
  const [colors, setColors] = useState([]);
  const [swatches, setSwatches] = useState([]);

  const getColors = async () => {
    await Client.get('colors/').then((res) => {
      setColors(res.data);
    });
  };

  const getSwatches = async () => {
    await Client.get('swatches/').then((res) => {
      setSwatches(res.data);
    });
  };

  useEffect(() => {
    getColors();
    getSwatches();
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Sidebar colors={colors} swatches={swatches} />
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
