import '../../styles/Header.css'
import Logo from './Logo'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <SearchBar />
    </div>
  )
}

export default Header