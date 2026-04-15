import './BeforeAfter.css';

// Import your before/after images from assets folder
// Add your images to src/assets/ and import them here
// Example: import before1 from '../assets/before1.jpg';
import beforeImage1 from '../assets/Microblading-near-me.webp';
import afterImage1 from '../assets/Microblading-eyebrows-cost-in-Mumbai.webp';
import beforeImage2 from '../assets/Microblading-near.webp';
import afterImage2 from '../assets/combination-brows-near-me.webp';
import beforeImage3 from '../assets/Korean-scalp-care.webp';
import afterImage3 from '../assets/Perfect-lips.webp';

const BeforeAfter = () => {
  const comparisons = [
    { before: beforeImage1, after: afterImage1 },
    { before: beforeImage2, after: afterImage2 },
    { before: beforeImage3, after: afterImage3 },
  ];

  return (
    <section className="before-after" id="before-after">
      <h2><span>Client Results</span></h2>
      <p className="section-subtitle">Before & After</p>
      <div className="comparisons">
        {comparisons.map((item, index) => (
          <div className="comparison" key={index}>
            <div className="before-label">
              <img src={item.before} alt={`Before ${index + 1}`} />
              <span>BEFORE</span>
            </div>
            <div className="after-label">
              <img src={item.after} alt={`After ${index + 1}`} />
              <span>AFTER</span>
            </div>
          </div>
        ))}
      </div>
      <p className="results-note">Real client results</p>
    </section>
  );
};

export default BeforeAfter;