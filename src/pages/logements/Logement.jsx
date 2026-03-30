import logements from "../../data/logements.json"
import {useParams} from "react-router"
import Erreur from "../erreur/Erreur.jsx";

function Logement() {
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id)
    if (logement === undefined) return (<Erreur/>)
    return <>
        <h1>{logement.title}</h1>
</>
}

export default Logement