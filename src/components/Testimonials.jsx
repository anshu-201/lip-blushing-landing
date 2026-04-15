import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Amazing results! My lips look so natural and beautiful. Highly recommend!",
      name: "Priya Sharma"
    },
    {
      text: "Professional service and quick recovery. Worth every penny.",
      name: "Anjali Gupta"
    },
    {
      text: "The best lip blushing experience in Delhi. Expert technicians and great care.",
      name: "Kavita Singh"
    }
  ];

  return (
    <section className="testimonials">
      <h2><span>What Our Clients Say</span></h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.text}"</p>
            <cite>- {testimonial.name}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;