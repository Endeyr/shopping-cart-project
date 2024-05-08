import heroBg from "@/assets/images/map.webp";
import Container from "@/components/container";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <Container
      className="bg-center bg-no-repeat bg-cover mt-0 py-12"
      id="hero-section"
      style={{ backgroundImage: "url(" + heroBg + ")" }}
    >
      <div
        className="xl:w-1/2 w-full h-full flex flex-col justify-between gap-4 items-start text-white font-bold"
        style={{ textShadow: "1px 1px 2px black" }}
      >
        <h2 className="capitalize text-4xl text-center w-full my-4 flex flex-col">
          Welcome to <span>Chancellor Hassan&apos;s Bazaar!</span>
        </h2>
        <p>
          Located in the heart of Al Kharid, Chancellor Hassan's Bazaar is the
          go-to destination for adventurers, traders, and heroes alike. Our
          bazaar offers an unparalleled selection of items, from basic
          necessities to rare artifacts, catering to every need and desire of
          our diverse clientele.
        </p>
        <p>
          As the premier marketplace of Al Kharid, Chancellor Hassan&apos;s
          Bazaar prides itself on its extensive inventory and exceptional
          customer service. Our knowledgeable staff are dedicated to assisting
          patrons in finding the perfect gear for their adventures, ensuring
          that every customer leaves satisfied and prepared for their next
          quest.
        </p>
        <p>
          Whether you seek powerful weapons, enchanted armor, or mystical
          artifacts, Chancellor Hassan&apos;s Bazaar has it all. Visit us today
          and discover a world of adventure and opportunity right at your
          fingertips. Your journey begins here, at Chancellor Hassan&apos;s
          Bazaar!
        </p>
        <div className="w-full flex justify-center align-center">
          <Button>
            <Link to={"/products/1"}>Check Out Our Products</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default Hero;
