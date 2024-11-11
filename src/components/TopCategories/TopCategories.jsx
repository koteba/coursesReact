import React from 'react';
import Title from '../Title/Title';
import './TopCategories.css';

const TopCategories = ({ items, firIcon, secIcon }) => {

    const scrollLeft = () => {
        const carousel = document.querySelector('.courses');
        if (carousel) {
            if (carousel.scrollLeft <= 0) {
                // إذا كان عند البداية، انقل إلى النهاية
                carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
            } else {
                // إزاحة 200 بكسل لليسار
                carousel.scrollBy({ left: -200, behavior: 'smooth' });
            }
        }
    };

    const scrollRight = () => {
        const carousel = document.querySelector('.courses');
        if (carousel) {
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                // إذا كان عند النهاية، انقل إلى البداية
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // إزاحة 200 بكسل لليمين
                carousel.scrollBy({ left: 200, behavior: 'smooth' });
            }
        }
    };


    return (
        <>
            <Title title="Explore Top Categories" content="Click on the categories and explore all courses" />
            <div className='courses-container'>
                <div className="carousel-arrow left-arrow" onClick={scrollLeft}>
                    {firIcon}
                </div>
                <div className='courses'>
                    {items.map((item, index) => (
                        <div key={index} className='course-item'>
                            <img src={item.img} alt='Course icon' />
                            <div className='overlay-icon'>
                                {item.icon} {/* عرض الأيقونة هنا */}
                            </div>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
                <div className="carousel-arrow right-arrow" onClick={scrollRight}>
                    {secIcon}
                </div>
            </div>
        </>
    );
};

export default TopCategories;
