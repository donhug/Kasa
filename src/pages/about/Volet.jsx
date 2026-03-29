import './Volet.css'
import fleche from '../../assets/images/fleche.jpg'
import {useState} from "react";

const Volet = (props) => {
    const[isOpen ,setIsOpen] = useState(false)

    return(
        <>
            <div className="volet">
                <div className="about__case">
                    <h2>{props.title}</h2>
                    <img src={fleche} alt=""/>
                </div>
                {}
                <div className="about__details">
                    <p>{props.texte}</p>
                </div>
            </div>
        </>
    );
}
export default Volet