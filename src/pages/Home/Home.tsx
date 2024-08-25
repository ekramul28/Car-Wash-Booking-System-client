import Banner from "../Banner/Banner";
import Service from "../ServiceSection/Service";
import Testimonial from "../Tastimonial/Tastimonial";
import WelcomeSection from "../welcomeSection/welcomeSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <WelcomeSection />
      <Testimonial />
      <Service />
    </div>
  );
};

export default Home;
