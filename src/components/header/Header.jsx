import './Header.css'
import About from '../../pages/about/A-Propos.jsx'
import Accueil from '../../pages/index/Accueil.jsx'
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
                <Link to="/A-Propos" className="header__link">A Propos</Link>
            </nav>
        </header>
    </>
}

export default Header;