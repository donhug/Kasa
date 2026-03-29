import './Erreur.css'
import { Link } from 'react-router-dom'

function Error() {
    return <>
        <div className="error">
            <div className="error__code">
                <h1 className="error__404">
                    404
                </h1>
                <p className="error__oups">
                    Oups! La page que vous demandez n'existe pas.
                </p>
            </div>
            <div className="error__retour">
                <Link to="/" className="error__link">
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </div>
    </>
}
export default Error;