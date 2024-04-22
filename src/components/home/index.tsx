import CallToAction from "../call-to-action";
import Hero from "../hero";
import Identity from "../identity";
import Services from "../../routes/services";
import Testimonials from "../testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Identity />
      <Testimonials />
      <CallToAction />
    </>
  );
};
export default Home;
