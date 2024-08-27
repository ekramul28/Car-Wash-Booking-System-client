import Banner from "../Banner/Banner";
import ServiceSection from "../ServiceSection/Service";
import Testimonial from "../Tastimonial/Tastimonial";
import WelcomeSection from "../welcomeSection/welcomeSection";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <WelcomeSection />
      <Testimonial />
      <ServiceSection />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
