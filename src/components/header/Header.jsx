import './Header.css'
import { NavLink} from 'react-router-dom'
import logo from '../../assets/images/LOGO.jpg'

function Header() {
    return (
        <header>
            <div className="header__logo">
                <img src={logo} alt="logo de KASA"/>
            </div>
            <nav className="header__nav">
                <NavLink to="/" className="header__link">Accueil</NavLink>
                <NavLink to="/A-Propos" className="header__link">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header;