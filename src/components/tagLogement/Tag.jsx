import "./Tag.css"

const Tag = (props) => {
    return (
        <div className="tags">
            <p>
                {props.tag}
            </p>
        </div>
    )
}
export default Tag;