import './Questions.css';

const Questions = ({ title, content, btn, img, items }) => {
    function toggleAnswer(index) {
        const faqItems = document.querySelectorAll('.faq-item');
        const currentFaq = faqItems[index];
        const answer = currentFaq.querySelector('.faq-answer');
        const toggleSymbol = currentFaq.querySelector('.faq-toggle');

        // Toggle the display style and the icon
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggleSymbol.textContent = '+';
        } else {
            answer.style.display = 'block';
            toggleSymbol.textContent = '−';
        }
    }
    return (
        <>
            <section className='faq-section'>
                <div className="faq-content">
                    <div className="faq-left">
                        <h3>{title}</h3>
                        <h2>Any Questions?<br />Find here.</h2>
                        <button className="send-message-btn">{btn}</button>
                       
                    </div>
                    <div className="faq-right">
                        {items.map((item, index) => (
                            <div key={index} className="faq-item">
                                <div className="faq-question" onClick={() => toggleAnswer(index)}>
                                    <h4>{item.question}</h4>
                                    <span className="faq-toggle">+</span>
                                </div>
                                <div className="faq-answer" style={{ display: 'none' }}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="illustration">
                    <img src={img} alt="Illustration" />
                </div>
            </section>
        </>
    );
};

// Function to handle FAQ toggle functionality using JavaScript


export default Questions;
