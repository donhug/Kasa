import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/LOGO.jpg'

function Header() {
    return <>
        <header>
            <div className="header__logo">
                <img src={logo} alt="logo de KASA"/>
            </div>
            <nav className="header__nav">
                <Link to="/" className="header__link">Accueil</Link>
                <Link to="/" className="header__link">A Propos</Link>
            </nav>
        </header>
    </>
}

export default Header;