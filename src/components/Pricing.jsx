import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing">
      <h2><span>Special Offer</span></h2>
      <div className="pricing-content">
        <p className="pricing-text">Starting from <span className="price-highlight">₹4,999</span></p>
        <p className="offer-note">Limited Time Only</p>
        <a href="#contact" className="btn primary">Book Your Appointment →</a>
      </div>
    </section>
  );
};

export default Pricing;