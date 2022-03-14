import '../../styles/Swatches.css'
import SwatchCard from './SwatchCard'
import { useState } from 'react'

const Swatches = ({ swatches, swatchLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getSwatchPage = () => {
    const firstIndex = currentPage * swatchLimit - swatchLimit;
    const lastIndex = firstIndex + swatchLimit;
    return swatches.slice(firstIndex, lastIndex);
  };

  const getPages = () => {
    const pages = Math.round(swatches.length / swatchLimit)
    return new Array(pages).fill().map((_, index) => index + 1);
  };

  return (
    <div className="swatches">
      <section className="swatch-card-container">
        {getSwatchPage().map((swatch) => (
          <SwatchCard key={swatch.id} swatch={swatch} />
        ))}
      </section>

      <div className="page-numbers">
        {getPages().map((pageNumber, index) => (
          <p
            key={index}
            onClick={changePage}
            className={`page ${currentPage === pageNumber ? 'active' : null}`}
          >
            {pageNumber}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Swatches