import "./Title.css"


const Titre = (props) =>{
    return(
        <div className="logement__title">
            <h1>
                {props.titre}
            </h1>
            <p>
                {props.position}
            </p>
        </div>
    )
}
export default Titre;