import { useNavigate } from "react-router-dom"

const SwatchCard = ({ swatch }) => {
  const navigate = useNavigate()
  const { id, hex } = swatch

  return (
    <div className="swatch-card" onClick={() => navigate(`/${id}`)}>
      <section className="swatch-background" style={{ backgroundColor: hex }}></section>
      <p>{hex}</p>
    </div>
  )
}

export default SwatchCard