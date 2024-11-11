import SearchBar from '../SearchBar/SearchBar';
import './Hero.css';

const Hero = ({ firimg, title, subtitle, secimg }) => {
  return (
    <div className='hero-section'>
      <img src={firimg} alt="Main illustration" className='illustration' />
      <div className="hero-content">
        <h1>Learn with us anywhere<br/>with the best <span>experts</span></h1>
        <p>We collaborate with 275+ leading universities and companies</p>
        {/* <h1>{title}</h1>
        <p>{subtitle}</p> */}
        <SearchBar input={{ type: "text", placeholder: "What do you want to learn?" }} btn="Explore"/>
      </div>
      <img src={secimg} alt="Secondary illustration" className='illustration' />
    </div>
  );
}
//this code for mobile
// const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// const navLinks = document.querySelector('.nav-links');
// const closeBtn = document.querySelector('.close-btn');

// mobileMenuBtn.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });

// closeBtn.addEventListener('click', () => {
//   navLinks.classList.remove('active');
// });
export default Hero;
