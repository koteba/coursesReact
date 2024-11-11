import './List.css';

const List = ({ title, items }) => {
    return (
        <div className="footer-column">
            <h4>{title}</h4>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.content}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
