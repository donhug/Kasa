import './Banner.css'

const Banner = (props) => {
    return (
        <div className="banner__container">
            <div className="banner">
                <img className={props.dark ? "banner__image" : ""} src={props.image} alt="Image d'entête"/>
                {props.title && <h1 className="banner__title">{props.title}</h1>}
            </div>
        </div>
    )
}
export default Banner