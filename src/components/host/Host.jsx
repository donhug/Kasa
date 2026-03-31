import "./Host.css"

const Host = ( props ) => {
    return (
        <div className="logement__host">
            <p>
                {props.nom}
            </p>
            <img className="host__pics"
                 src={props.host}
                 alt={`photo de ${props.nom}`}/>
        </div>
    )
}
export default Host;