import './StateSection.css';

const StateSection = ({ states }) => {
  return (
    <section className='stats-section'>
        {states.map((item, index) => (
          <div key={index} className={`stat-box ${item.class}`}>
            {item.title.endsWith('.svg') ? (
              <img src={item.title} alt={item.subtitle} />
            ) : (
              <h2>{item.title}</h2>
            )}
            <p>{item.subtitle}</p>
          </div>
        ))}
    </section>
  );
};

export default StateSection;
