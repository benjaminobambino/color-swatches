import { useNavigate } from 'react-router-dom'

const ClearButton = () => {
  const navigate = useNavigate()

  return (
    <button className="clear-button" onClick={() => navigate('/')}>
      Clear
    </button>
  )
}

export default ClearButton