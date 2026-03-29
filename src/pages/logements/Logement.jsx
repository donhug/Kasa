import logements from "../../data/logements.json"
import {useParams} from "react-router"

function Logement() {
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id)
    return <>
        <h1>{logement.title}</h1>
</>
}

export default Logement