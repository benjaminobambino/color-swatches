import { useNavigate } from "react-router-dom"

const SwatchCard = ({ swatch }) => {
  const navigate = useNavigate();

  return (
    <div className="swatch-card" onClick={() => navigate(`/${swatch.id}`)}>
      <section className="swatch-background" style={{ backgroundColor: swatch.hex }}></section>
      <p>{swatch.hex}</p>
    </div>
  )
}

export default SwatchCard