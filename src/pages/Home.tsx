import CallToAction from "../components/CallToAction/CallToAction";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="upper-section">
        <Header />
        <Hero />
      </div>
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
