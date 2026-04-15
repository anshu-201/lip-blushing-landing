import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: '💋',
      title: 'Naturally Pink Lips',
      description: 'Enhance your natural beauty with soft, pink-tinted lips'
    },
    {
      icon: '⏱️',
      title: 'Lasts 2-3 Years',
      description: 'Long-lasting results with proper aftercare'
    },
    {
      icon: '⏰',
      title: 'Saves Time Daily',
      description: 'No need for daily lip tint or makeup application'
    },
    {
      icon: '🎨',
      title: 'Corrects Pigmentation',
      description: 'Evens out uneven skin tone and discoloration'
    }
  ];

  return (
    <section className="benefits">
      <h2><span>Benefits of Lip Blushing</span></h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit">
            <div className="icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;