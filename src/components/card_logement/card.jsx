import './card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return <>
        <Link to="/">
            <article className="card">
                <img className="card__image" src={props.cover} alt={`location de${props.name}`}/>
                <div className="card__title">
                    <p>{props.title}</p>
                </div>
            </article>
        </Link>
    </>
}
export default Card;