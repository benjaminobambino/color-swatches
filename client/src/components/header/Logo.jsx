const logoSymbol = './logo-symbol.svg';

const Logo = () => {
  return (
    <div className="logo">
      <a href="https://www.helpfulhuman.com/" target="blank" rel="noopener noreferrer">
        <img src={logoSymbol} alt="logo" />
      </a>
    </div>
  )
}

export default Logo