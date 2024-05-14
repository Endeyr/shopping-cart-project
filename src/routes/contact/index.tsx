import Container from "@/components/container";
import ContactForm from "@/components/ui/contact-form";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <Container className="flex-col md:space-y-8">
      <h2 className="w-full text-xl font-bold text-center capitalize">
        Contact Us
      </h2>
      <p className="mt-0">
        We value your feedback and inquiries at Chancellor Hassan&apos;s Bazaar.
        Whether you're seeking assistance with a purchase, have a question about
        our services, or simply want to share your experience with us, we're
        here to help. Our dedicated team is readily available to address any
        concerns or provide guidance as needed. Feel free to reach out to us via
        email, phone, or visit our storefront in Al Kharid. Your satisfaction is
        our top priority, and we look forward to hearing from you soon.
      </p>
      <div className="flex flex-col justify-around w-full gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="font-bold text-center">Contact Form</h3>
          <ContactForm />
        </div>
        <div>
          <h3 className="w-full mb-4 text-lg font-bold text-center capitalize">
            Visit Us Today
          </h3>
          <div className="flex flex-col items-center justify-evenly">
            <p className="flex justify-between w-full sm:w-1/2">
              Visit Us:
              <span className="text-right">Location</span>
            </p>
            <p className="flex justify-between w-full sm:w-1/2">
              Hours of Operation:{" "}
              <span className="text-right">Open 7 days a week</span>
            </p>
            <p className="flex justify-between w-full sm:w-1/2">
              Phone: <span className="text-right">555-555-5555</span>
            </p>
            <p className="flex justify-between w-full sm:w-1/2">
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
