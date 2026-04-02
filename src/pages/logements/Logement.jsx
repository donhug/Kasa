import './Logements.css'
import logements from "../../data/logements.json"
import {useParams} from "react-router-dom"
import Erreur from "../erreur/Erreur.jsx";
import Carrousel from "../../components/carrousel/Carrousel.jsx";
import Title from "../../components/titleLogement/Title.jsx";
import Host from "../../components/host/Host.jsx";
import Rating from "../../components/starsLogement/Stars.jsx";
import Tag from "../../components/tagLogement/Tag.jsx";
import Collapse from "../../components/collapse/Collapse.jsx";

function Logement() {
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id)
    if (logement === undefined) return (<Erreur/>)
    return <>
        <div className="container main">
            <div className="logement__main">
                <div className="logement__carrousel">
                    <Carrousel
                        picture={logement.pictures}
                    />
                </div>

                <div className="info__container">

                    <div className="logement__infos">
                        <Title
                            titre={logement.title}
                            position={logement.location}
                        />

                        <div className="logement__tags">
                            {logement.tags.map((tags) => (
                                <Tag
                                    tag={tags}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="logement__rate">
                        <Host
                            nom={logement.host.name}
                            host={logement.host.picture}
                        />
                        <Rating
                            rating={logement.rating}
                        />
                    </div>

                </div>

                <div className="logement__collapse">
                    <Collapse
                        title={"Description"}
                        texte={logement.description}
                    />

                    <Collapse
                        title={"Equipments"}
                        liste={logement.equipments}
                    />
                </div>
            </div>
        </div>
</>
}

export default Logement