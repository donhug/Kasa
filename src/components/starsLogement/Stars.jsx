import "./Stars.css"
import stars from "../../assets/images/star.png"
import starsF from "../../assets/images/starsF.png"

const Rating = (props) => {
    return (

        <div className="star__container">
            {
                Array.from({length:5},(_,i) => i).map((i) =>
                    <img
                        className="star"
                        key={i}
                        src={i < props.rating ? starsF : stars}
                        alt=""
                    />
                )
            }
        </div>
    )
}
export default Rating