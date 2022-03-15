import { useNavigate } from 'react-router-dom'

const RandomButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/25`)
  }

  return (
    <div>
      <button className="random-button" onClick={handleClick}>Random Color</button>
    </div>
  )
}

export default RandomButton