import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero-section">
      <div className="hero-text">
        Data <span className="hero-underline-text">tailored</span> to your
        needs.
      </div>
      <div className="learn-more-button">
        <button className="button-primary">Lean more</button>
      </div>
      <div className="hero-image"></div>
    </main>
  );
};

export default Hero;
