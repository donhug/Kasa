import './Collapse.css'
import flecheUp from '../../assets/images/fleche_up.png'
import {useState} from "react";

const Collapse = (props) => {
    const[isOpen ,setIsOpen] = useState(false)

    return(
        (
            <div className="volet">
                <div className="about__case">
                    <h2>{props.title}</h2>
                    <button className="about__btn" onClick={()=>setIsOpen(!isOpen)}>
                        <img src={flecheUp} alt="" className={!isOpen ? "about__img-open" : "about__img"}/>
                    </button>
                </div>

                <div className={`about__details ${isOpen ? "about__details__open" : ""}`}>
                    {props.texte &&<p className="about__texte">{props.texte}</p>}
                    {props.liste &&
                        <ul className="liste">
                            {props.liste.map((equipments) =>(
                                <li key={equipments}> {equipments}</li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        )
    );
}
export default Collapse