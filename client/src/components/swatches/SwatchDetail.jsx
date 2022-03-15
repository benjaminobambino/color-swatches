import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const SwatchDetail = () => {
  const [swatch, setSwatch] = useState({})
  const params = useParams()

  const getSwatch = async () => {
    await axios.get(`http://localhost:8000/swatches/${params.swatchId}`).then((res) => {
      setSwatch(res.data);
    });
  };

  useEffect(() => {
    getSwatch()
  }, [])

  return (
    <div className="swatch-detail">
      <section className="swatch-detail-background" style={{ backgroundColor: swatch.hex }}></section>
      <p>{swatch.hex}</p>
    </div>
  )
}

export default SwatchDetail