import './Collapse.css'
import flecheUp from '../../assets/images/fleche_up.png'
import {useState} from "react";

const Collapse = (props) => {
    const[isOpen ,setIsOpen] = useState(false)

    return(
        <>
            <div className="volet">
                <div className="about__case">
                    <h2>{props.title}</h2>
                    <button className="about__btn" onClick={()=>setIsOpen(!isOpen)}>
                        <img src={flecheUp} alt="" className={!isOpen ? "about__img" : "about__img-open"}/>
                    </button>
                </div>
                {isOpen &&
                    <div className="about__details">
                        <p>{props.texte}</p>
                    </div>
                }
            </div>
        </>
    );
}
export default Collapse