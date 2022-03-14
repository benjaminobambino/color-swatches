import '../../styles/Swatches.css'
import SwatchCard from './SwatchCard'

const Swatches = ({ swatches }) => {
  return (
    <div className="swatches">
      <section className="swatch-card-container">
        {
          swatches.map((swatch) => {
            // return <p key={swatch.id}>{swatch.hex}</p>
            return <SwatchCard key={swatch.id} swatch={swatch} />
          })
        }
      </section>
    </div>
  )
}

export default Swatches