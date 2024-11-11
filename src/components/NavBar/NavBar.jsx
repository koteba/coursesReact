import './NavBar.css';

const NavBar = ({ logo, items, btn }) => {
    const handleMenuToggle = () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active'); // إضافة أو إزالة الكلاس active
    };
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    return (
        <header>
            <nav className='navbar'>
                <div className="logo">Edu<span>jar</span></div>
                <div className="mobile-menu-btn" onClick={handleMenuToggle}>
                    &#9776; {/* رمز القائمة (☰) */}
                </div>
                <ul className='nav-links'>
                    <li className="close-btn" onClick={handleMenuToggle}>&times;</li> {/* زر الإغلاق */}
                    {items.map((item, index) => (
                        <li key={index} onClick={handleMenuToggle}><a href="#">{item}</a></li>
                    ))}
                </ul>
                <button className='signup-btn'>{btn}</button>
            </nav>
        </header>
    );
}

export default NavBar;
