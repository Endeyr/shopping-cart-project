import CallToAction from "../call-to-action";
import Hero from "../hero";
import Identity from "../identity";
import Services from "../services";
import Testimonials from "../testimonials";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Services */}
      <Services />
      {/* Identity */}
      <Identity />
      {/* Testimonials */}
      <Testimonials />
      {/* Call to Action */}
      <CallToAction />
    </>
  );
};
export default Home;
