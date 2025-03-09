import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="call-to-action-section">
      <div className="founder-image"></div>
      <div className="cta-content">
        <div className="cta-title">Be the first to test</div>
        <div className="cta-description">
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </div>
        <div className="cta-button button-primary">
          Apply for access
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
