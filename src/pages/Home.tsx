import CallToAction from "../components/CallToAction/CallToAction";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <Hero />
      <Feature />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
