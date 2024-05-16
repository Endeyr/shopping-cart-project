import callToActionImg from "@/assets/images/items.webp";
import Container from "@/components/container";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <Container className="flex-col py-6 bg-os_header_lite dark:bg-os_header_dark">
      <h2 className="w-full text-4xl font-bold text-center capitalize outline-black">
        Experience the Selection for Yourself!
      </h2>
      <div className="grid w-full grid-cols-1 md:gap-16 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 ml-4">
          <p>
            Ready to embark on your next adventure or stock up on essential
            supplies? Look no further than Chancellor Hassan&apos;s Bazaar!
            Visit us in Al Kharid to explore our vast selection of items,
            ranging from everyday essentials to rare treasures.
          </p>
          <p>
            Our knowledgeable staff is here to assist you every step of the way.
            Come experience the magic of our bazaar for yourself and discover
            why adventurers from all corners of Gielinor choose us as their
            preferred trading hub. Your next great find awaits!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <img
            src={callToActionImg}
            alt="items"
            className="size-[400px] hidden sm:block"
            loading="lazy"
          />
        </div>
      </div>
      <Button>
        <Link to={"/products/1"}>Check Out Our Products</Link>
      </Button>
    </Container>
  );
};
export default CallToAction;
