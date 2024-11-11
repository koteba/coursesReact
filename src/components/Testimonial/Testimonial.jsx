import './Testimonial.css'

const Testimonial = ({title, content, user,firArrow,secArrow,items}) => {
    return (
        <>  <section class="testimonial-section">
            <div class="testimonial-content">
                <h2>{title}</h2>
                <div class="quote-icon">“</div>
                <p class="testimonial-text">{content}
                </p>
                <p class="client-name">{user}</p>
                <div class="testimonial-navigation">
                    <button class="nav-arrow left-arrow">{firArrow}</button>
                    <div class="client-avatars">
                        {items.map((item, index) => {
                            return (
                                <img key={index} src={item.img} alt={item.alt} class="avatar" />

                            )
                        })}
                 
                    </div>
                    <button class="nav-arrow right-arrow">{secArrow}</button>
                </div>
            </div>
        </section></>
    )
}

export default Testimonial