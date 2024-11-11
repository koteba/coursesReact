import './Title.css'
const Title = ({ title, content,isStart }) => {
    return (
        <div className={`categories-section ${isStart ? 'start' : ''}`}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Title