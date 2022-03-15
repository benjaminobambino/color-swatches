import { useParams } from 'react-router-dom'
import { useState } from 'react'
import useData from '../../services/useData'

const DetailCard = () => {
  const [swatch, setSwatch] = useState({})
  const params = useParams()

  useData(`swatches/${params.swatchId}`, setSwatch)

  return (
    <div className="detail-card">
      <section className="detail-card-background" style={{ backgroundColor: swatch.hex }}></section>
      <p>{swatch.hex}</p>
    </div>
  )
}

export default DetailCard