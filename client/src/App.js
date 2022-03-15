import './styles/App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Swatches from './components/swatches/Swatches';
import Detail from './components/detail/Detail';

function App() {
  const [colors, setColors] = useState([]);
  const [swatches, setSwatches] = useState([]);

  const getColors = async () => {
    await axios.get('http://localhost:8000/colors/').then((res) => {
      setColors(res.data);
    });
  };

  const getSwatches = async () => {
    await axios.get('http://localhost:8000/swatches/').then((res) => {
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
        <Sidebar colors={colors} />
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
