import confirmBg from "@/assets/images/osrs.webp";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
  return (
    <Container
      className="py-12 mt-0 bg-center bg-no-repeat bg-cover shadow-lg xl:min-h-[calc(100dvh-80px)]"
      style={{ backgroundImage: "url(" + confirmBg + ")" }}
    >
      <div
        className="flex flex-col items-center justify-center w-full h-full gap-4 font-bold text-white"
        style={{ textShadow: "1px 1px 2px black" }}
      >
        <div className="text-xl text-white">Thank you for your order!</div>
        <Button>
          <Link to={"/products/1"}>Back to Products</Link>
        </Button>
      </div>
    </Container>
  );
};
export default ConfirmationPage;
