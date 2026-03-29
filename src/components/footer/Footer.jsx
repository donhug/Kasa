import './Footer.css'
import logoF from '../../assets/images/LOGO-F.png'

function Footer(){
    return <>
        <footer>
            <div className="footer__logo">
                <img src={logoF} alt="logo de KASA"/>
            </div>
            <div className="footer__txt">
                <p>
                    © 2020 Kasa. All rights reserved
                </p>
            </div>
        </footer>
    </>
}

export default Footer;