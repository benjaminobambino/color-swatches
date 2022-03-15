import { useNavigate } from 'react-router-dom'

const RandomButton = ({ swatches }) => {
  const navigate = useNavigate()
  const randomId = Math.floor(Math.random() * swatches.length) + 1
  

  const handleClick = () => {
    navigate(`/${randomId}`)
  }

  return (
    <div>
      <button className="random-button" onClick={handleClick}>Random Color</button>
    </div>
  )
}

export default RandomButton