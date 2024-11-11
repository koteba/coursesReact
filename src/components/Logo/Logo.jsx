import './Logo.css';

const Logo = ({ firArrow, secArrow, items }) => {
    const scrollLeft = () => {
        const carousel = document.querySelector('.logo-container'); // الحصول على عنصر الكاروسيل
        if (carousel) {
            if (carousel.scrollLeft <= 0) {
                // إذا كان عند البداية، انتقل إلى النهاية
                carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
            } else {
                // إزاحة 200 بكسل لليسار
                carousel.scrollBy({ left: -200, behavior: 'smooth' });
            }
        }
    };

    const scrollRight = () => {
        const carousel = document.querySelector('.logo-container'); // الحصول على عنصر الكاروسيل
        if (carousel) {
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                // إذا كان عند النهاية، انتقل إلى البداية
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // إزاحة 200 بكسل لليمين
                carousel.scrollBy({ left: 200, behavior: 'smooth' });
            }
        }
    };


    return (
        <section className="logo-carousel">
            <button className="carousel-arrow left-arrow" onClick={scrollLeft}>{firArrow}</button>
            <div className="logo-container">
                {items.map((item, index) => (
                    <img key={index} src={item.img} alt={item.alt} className="logo" />
                ))}
            </div>
            <button className="carousel-arrow right-arrow" onClick={scrollRight}>{secArrow}</button>
        </section>
    );
};

export default Logo;
