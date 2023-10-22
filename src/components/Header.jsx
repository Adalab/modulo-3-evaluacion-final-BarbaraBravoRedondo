import '../styles/layouts/Header.scss';
import wow from '../images/wow-title.png';
function Header() {
  return (
    <header  className="header">
      <h1><img className="imgTitle"src={wow} alt="" /></h1>
    </header>
  )
}

export default Header