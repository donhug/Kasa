import './Banner.css'

const Banner = (props) => {
    return <>
        <div className="banner">
            <img src={props.image} alt="Image d'entête"/>
            {props.title && <h1 className="banner__title">{props.title}</h1>}
        </div>
    </>
}
export default Banner