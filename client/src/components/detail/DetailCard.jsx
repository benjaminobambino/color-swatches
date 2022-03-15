import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../../services/api'

const DetailCard = () => {
  const [swatch, setSwatch] = useState({})
  const params = useParams()

  useEffect(() => {
    const getSwatchDetail = async () => {
      await Client.get(`swatches/${params.swatchId}`).then((res) => {
        setSwatch(res.data);
      });
    };
    
    getSwatchDetail()
  }, [params])

  return (
    <div className="detail-card">
      <section className="detail-card-background" style={{ backgroundColor: swatch.hex }}></section>
      <p>{swatch.hex}</p>
    </div>
  )
}

export default DetailCard