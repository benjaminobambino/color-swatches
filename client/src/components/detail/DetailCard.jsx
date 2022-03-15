import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const DetailCard = () => {
  const [swatch, setSwatch] = useState({})
  const params = useParams()

  const getSwatchDetail = async () => {
    await axios.get(`http://localhost:8000/swatches/${params.swatchId}`).then((res) => {
      setSwatch(res.data);
    });
  };

  useEffect(() => {
    getSwatchDetail()
  }, [])

  return (
    <div className="detail-card">
      <section className="detail-card-background" style={{ backgroundColor: swatch.hex }}></section>
      <p>{swatch.hex}</p>
    </div>
  )
}

export default DetailCard