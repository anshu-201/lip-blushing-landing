import Header from './components/Header';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Benefits from './components/Benefits';
import Procedure from './components/Procedure';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import StickyCTA from './components/StickyCTA';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BeforeAfter />
      <Benefits />
      <Procedure />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <StickyCTA />
    </div>
  );
}

export default App;
