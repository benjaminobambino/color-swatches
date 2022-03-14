const SwatchCard = ({ swatch }) => {
  return (
    <div className="swatch-card">
      <section className="swatch-background" style={{ backgroundColor: swatch.hex }}></section>
      <p>{swatch.hex}</p>
    </div>
  )
}

export default SwatchCard