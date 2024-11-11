import List from '../List/List'
import './Footer.css'

const Footer = ({ content, title, type, placeholder, btn }) => {
    return (
        <footer class="footer" id="footer">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Edu<span>jar</span></h3>
                    <p>{content}</p>
                    <p>© 2024 <span class="highlight">edujar</span> - All Rights Reserved</p>
                </div>
                <List
                    title="Quick links"
                    items={[
                        { content: "Home", href: "" },
                        { content: "Courses", href: "" },
                        { content: "About us", href: "" },
                        { content: "Works", href: "" },
                        { content: "Blog", href: "" }
                    ]}
                />
                <List
                    title="Legal"
                    items={[
                        { content: "Terms of use", href: "" },
                        { content: "Terms & conditions", href: "" },
                        { content: "Privacy policy", href: "" },
                        { content: "Cookie policy", href: "" }
                    ]}
                />

                <div class="footer-column">
                    <h4>{title}</h4>
                    <form class="subscribe-form">
                        <input type={type} placeholder={placeholder} />
                        <button type="submit">{btn}</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer