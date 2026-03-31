import './Logements.css'
import logements from "../../data/logements.json"
import {useParams} from "react-router"
import Erreur from "../erreur/Erreur.jsx";
import Carrousel from "../../components/carrousel/Carrousel.jsx";

function Logement() {
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id)
    if (logement === undefined) return (<Erreur/>)
    return <>
        <div className="container">
            <div className="logement__main">
                <div className="logement__carrousel">
                    <Carrousel picture={logement.pictures} />
                </div>

                <div className="logement__infos">
                    <div className="logement__title"><h1>{logement.title}</h1><p>{logement.location}</p></div>
                    <div className="logement__host"><p>{logement.host.name}</p><img className="host__pics" src={logement.host.picture} alt=""/></div>
                </div>

                <div className="logement__rate">
                    <div className="logement__tags"></div>
                    <div className="logement__stars"></div>
                </div>
                <div className="logement__collapse">
                </div>
            </div>
        </div>
</>
}

export default Logement