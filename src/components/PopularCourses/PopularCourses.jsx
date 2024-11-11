import Title from '../Title/Title';
import './PopularCourses.css';

const PopularCourses = ({ firIcon, secIcon, items }) => {
    
    return (
        <>
            <Title title="Popular Courses" content="Let’s join our best classes with our famous instructor and institutes" isStart={true} />
            <section className="popular-courses">
                <div className="carousel-controls">
                    <button className="carousel-btn prev-btn">{firIcon}</button>
                    <button className="carousel-btn next-btn">{secIcon}</button>
                </div>
                <div className="courses-grid">
                    {items.map((item, index) => (
                        <div key={index} className="course-card">
                            <div className="course-info">
                                <span style={{ color: item.color }}>{item.icon}</span>
                                <span className="lesson-count">{item.count}</span>
                                <span style={{ color: item.color }} className="category-tag">{item.type}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p className="course-description">{item.description}</p>
                            <hr />
                            <div className="card-footer">
                                <button className="join-btn">Join</button>
                                <div className="course-icon">
                                    <img src={item.img} alt="Course Icon" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="explore-courses-container">
                    <button className="explore-courses-btn">Explore Courses</button>
                </div>
            </section>
        </>
    );
};

export default PopularCourses;
