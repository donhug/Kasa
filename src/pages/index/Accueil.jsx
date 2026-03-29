import './accueil.css'
import Card from "../../components/card_logement/card.jsx";
import test from "../../assets/images/Image source 2.jpg"
import logements from "../../data/logements.json"


function Accueil() {
    return <>
    <div className="accueil__main">
        <div className="accueil__entete">
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="logement__container">
            <div className="logement__card">
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        cover={logement.cover}
                        title={logement.title}
                        name={logement.host.name}
                    />
                ))}

            </div>
        </div>

    </div>
    </>

}

export default Accueil