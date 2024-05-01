import Container from "@/components/container";
import { Link } from "react-router-dom";
const CallToAction = () => {
  return (
    <Container className="flex-col">
      <h2 className="w-full text-4xl font-bold text-center capitalize outline-black">
        Buy from us
      </h2>
      <p>paragraphs</p>
      <p>Call to action here either a button or form</p>
      <Link to={"/products/1"}>Products</Link>
    </Container>
  );
};
export default CallToAction;
