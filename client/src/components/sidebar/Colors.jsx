import { useState } from 'react';
import useData from '../../hooks/useData';

const Colors = () => {
  const [colors, setColors] = useState([]);
  useData('colors/', setColors);

  return (
    <div className="colors">
      {
        colors.map((color) => {
          return <p className="color" key={color.id}>{color.name}</p>
        })
      }
    </div>
  )
}

export default Colors