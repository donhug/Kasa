import './Logements.css'
import logements from "../../data/logements.json"
import {useParams} from "react-router"
import Erreur from "../erreur/Erreur.jsx";
import Carrousel from "../../components/carrousel/Carrousel.jsx";
import Title from "../../components/titleLogement/Title.jsx";
import Host from "../../components/host/Host.jsx";
import Rating from "../../components/starsLogement/Stars.jsx";

function Logement() {
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id)
    if (logement === undefined) return (<Erreur/>)
    return <>
        <div className="container">
            <div className="logement__main">
                <div className="logement__carrousel">
                    <Carrousel
                        picture={logement.pictures}
                    />
                </div>

                <div className="logement__infos">
                    <Title
                        titre={logement.title}
                        position={logement.location}
                    />
                    <Host
                        nom={logement.host.name}
                        host={logement.host.picture}
                    />
                </div>

                <div className="logement__rate">
                    <div className="logement__tags"></div>
                    <Rating
                        rating={logement.rating}
                    />
                </div>
                <div className="logement__collapse">
                </div>
            </div>
        </div>
</>
}

export default Logement