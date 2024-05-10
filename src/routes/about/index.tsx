import aboutImg from "@/assets/images/supplies.webp";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Container className="flex-col">
      <h2 className="w-full text-xl font-bold text-center capitalize">
        About Us
      </h2>
      <div className="items-start justify-center gap-4 xl:grid xl:grid-cols-2">
        <div className="flex items-center justify-center h-full w-full">
          <img
            className="hidden sm:block w-[640px] h-[360px] object-scale-down"
            src={aboutImg}
            alt="shop"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <p>
            At Chancellor Hassan&apos;s Bazaar, we pride ourselves on being the
            premier destination for adventurers and traders alike in the
            bustling city of Al Kharid. With decades of experience in the trade,
            our bazaar stands as a testament to quality, diversity, and
            unmatched service. From seasoned veterans to novice explorers, our
            doors are open to all seeking to outfit themselves with the finest
            gear and essentials Gielinor has to offer.
          </p>
          <p>
            Our establishment boasts an extensive inventory that caters to every
            need and aspiration. Whether you&apos;re searching for the perfect
            weapon to vanquish formidable foes or seeking rare artifacts to
            adorn your collection, our shelves are stocked with an eclectic
            array of items sourced from all corners of the realm. With a keen
            eye for quality and authenticity, Chancellor Hassan&apos;s Bazaar
            ensures that every item you acquire meets the highest standards of
            excellence.
          </p>
          <p>
            More than just a marketplace, Chancellor Hassan&apos;s Bazaar serves
            as a hub of community and camaraderie in Al Kharid. Our dedicated
            team of traders and enthusiasts is committed to fostering a
            welcoming environment where adventurers can connect, exchange
            stories, and forge lasting bonds. Join us at Chancellor
            Hassan&apos;s Bazaar and immerse yourself in a world of endless
            possibilities and discovery.
          </p>
          <div className="flex justify-center items-center w-full">
            <Button>
              <Link to={"/products/1"}>Check Out Our Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default AboutPage;
