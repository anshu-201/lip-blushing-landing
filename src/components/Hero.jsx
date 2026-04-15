import './Hero.css';
import heroVideo from '../assets/chunk000.mp4';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-video-wrapper">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1>Lip Blushing in Delhi</h1>
        <p className="subtitle">Natural Korean Tint Lips</p>
        <p className="description">Get soft, pink, fuller-looking lips with advanced Korean technique</p>
        <div className="cta-buttons">
          <a href="#contact" className="btn primary">Book Now</a>
          <a href="https://wa.me/919876543210" className="btn whatsapp">WhatsApp</a>
          <a href="tel:+919876543210" className="btn call">Call</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;