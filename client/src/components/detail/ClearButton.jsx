import { useNavigate } from 'react-router-dom'

const ClearButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <button className="clear-button" onClick={handleClick}>
      Clear
    </button>
  )
}

export default ClearButton