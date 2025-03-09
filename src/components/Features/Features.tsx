import "./Features.css";
import features from "../../aux/features";

interface FeatureProp {
  id: number;
  title: string;
  description: string;
}

const Feature = ({ id, title, description }: FeatureProp) => {
  return (
    <div className="single-feature">
      <div className="upper-half">
        <div className="feature-number">{id}</div>
      </div>
      <div className="lower-half">
        <div className="feature-title">{title}</div>
        <div className="feature-description">{description}</div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="features-section">
      {features.map((feature) => (
        <Feature {...feature} />
      ))}
    </section>
  );
};

export default Features;
