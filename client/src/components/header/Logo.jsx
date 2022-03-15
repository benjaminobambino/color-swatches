const logoSymbol = './logo-symbol.svg';
const logoLink = 'https://www.helpfulhuman.com/';

const Logo = () => {
  return (
    <div className="logo">
      <a href={logoLink} target="blank" rel="noopener noreferrer">
        <img src={logoSymbol} alt="logo" />
      </a>
    </div>
  )
}

export default Logo