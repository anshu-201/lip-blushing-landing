import './Procedure.css';

const Procedure = () => {
  const steps = [
    {
      number: 1,
      title: 'Consultation',
      description: 'Discuss your goals and choose the perfect shade for your lips.'
    },
    {
      number: 2,
      title: 'Procedure',
      description: 'A comfortable session where we apply the pigment to enhance your lips.'
    },
    {
      number: 3,
      title: 'Healing',
      description: 'Follow aftercare instructions for optimal results.'
    },
    {
      number: 4,
      title: 'Result',
      description: 'Enjoy your natural, beautiful lips that last for years.'
    }
  ];

  return (
    <section className="procedure">
      <h2><span>The Lip Blushing Process</span></h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Procedure;