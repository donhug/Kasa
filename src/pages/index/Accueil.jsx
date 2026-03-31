import './accueil.css'
import Card from "../../components/cardLogement/card.jsx";
import logements from "../../data/logements.json"
import Banner from "../../components/banner/Banner.jsx";
import image from "../../assets/images/Image source 1.jpg";


function Accueil() {
    return <>
    <div className="accueil__main">
        <Banner
            image= {image}
            title="Chez vous, partout et ailleurs"
            dark
        />
        <div className="logement__container">
            <div className="logement__card">
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        id={logement.id}
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