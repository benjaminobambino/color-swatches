import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [colors, setColors] = useState([]);
  const [swatches, setSwatches] = useState([]);

  const getColors = async () => {
    await axios.get('http://localhost:8000/colors/').then((res) => {
      setColors(res.data);
    });
  };

  useEffect(() => {
    getColors();
  }, []);

  return <div className="App">{/* <p>{colors}</p> */}</div>;
}

export default App;
