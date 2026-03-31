import "./Carrousel.css"
import {useState} from "react";
import droite from "../../assets/images/droite.png"
import gauche from "../../assets/images/gauche.png"

const Carrousel = (props) => {
    const [index, setIndex] = useState(0)
    const suivant= () =>{
        setIndex(prev =>{
                if(prev === props.picture.length-1 ){
                    return 0
                }
                return prev +1
            }
        )
    }
    const avant=() =>{
        setIndex(prev =>{
                if(prev === 0 ){
                    return props.picture.length-1
                }
                return prev -1
            }
        )
    }
    return <>

        <div className="carrousel">
            <img className="carrousel__image" src={props.picture[index]} alt="photo du logement" />
            {props.picture.length > 1 &&
                <>
                    <div className="carrousel__button">
                        <button onClick={suivant} className="btn__droite">
                            <img src={droite} alt=""/>
                        </button>
                        <button onClick={avant} className="btn__gauche">
                            <img src={gauche} alt=""/>
                        </button>
                    </div>
                    <div className="carrousel__index">
                        <p>{index+1}/{props.picture.length}</p>
                    </div>
                </>
            }
        </div>


    </>
}
export default Carrousel;
