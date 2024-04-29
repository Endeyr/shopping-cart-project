import Container from "@/components/container";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <Container className="flex-col">
      <h2 className="w-full text-xl font-bold text-center capitalize">
        Contact Us
      </h2>
      <div className="flex flex-col gap-4 justify-evenly">
        <div className="flex flex-col items-center justify-center gap-2">
          {/* Contact Form */}
          <p>paragraph</p>
          <h3 className="font-bold text-center">Contact Form</h3>
          <p className="flex flex-col items-center justify-center gap-2 xl:grid xl:grid-cols-2">
            Contact form here
          </p>
        </div>
        <div>
          <h3 className="w-full mb-4 text-lg font-bold text-center capitalize">
            Visit Us Today
          </h3>
          <div className="flex flex-col items-center justify-evenly">
            <p className="flex justify-between w-full xl:w-1/4">
              Visit Us:
              <span className="text-right">Location</span>
            </p>
            <p className="flex justify-between w-full xl:w-1/4">
              Hours of Operation:{" "}
              <span className="text-right">Open 7 days a week</span>
            </p>
            <p className="flex justify-between w-full xl:w-1/4">
              Phone: <span className="text-right">555-555-5555</span>
            </p>
            <p className="flex justify-between w-full xl:w-1/4">
              Email: <span className="text-right">Email</span>
            </p>
            <div className="flex items-center justify-center w-full gap-4 mt-2 xl:w-1/4">
              <Link to="#">
                <FaFacebook size={35} />
              </Link>
              <Link to="#">
                <FaInstagram size={35} />
              </Link>
              <Link to="#">
                <FaSquareXTwitter size={35} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ContactPage;
