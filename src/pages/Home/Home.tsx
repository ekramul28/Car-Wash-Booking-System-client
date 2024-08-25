import Banner from "../Banner/Banner";
import Service from "../ServiceSection/Service";
import Testimonial from "../Tastimonial/Tastimonial";
import WelcomeSection from "../welcomeSection/welcomeSection";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <WelcomeSection />
      <Testimonial />
      <Service />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
