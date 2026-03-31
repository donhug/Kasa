import "./Carrousel.css"
import {useState} from "react";
import droite from "../../assets/images/droite.png"
import gauche from "../../assets/images/gauche.png"

const Carrousel = (props) => {
    const [index, setIndex] = useState(0)
    const suivant= () =>{
        setIndex(prev =>{
                if(prev === pictures.length-1 ){
                    return 0
                }
                return prev +1
            }
        )
    }
    const avant=() =>{
        setIndex(prev =>{
                if(prev === 0 ){
                    return pictures.length-1
                }
                return prev -1
            }
        )
    }
    return <>

        <div className="carrousel">
            <img src={props.picture[index]} alt="photo du logement" />
            <div>
                <button onClick={suivant}>
                    <img src={droite} alt=""/>
                </button>
                <button onClick={avant}>
                    <img src={gauche} alt=""/>
                </button>
            </div>
            <div>
                <p>{index+1}/{props.picture.length}</p>
            </div>
        </div>


    </>
}
export default Carrousel;
