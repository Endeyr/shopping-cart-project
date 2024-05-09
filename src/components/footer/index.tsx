import { GiLetterBomb, GiPhone, GiPin } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full sm:grid sm:grid-cols-4 sm:justify-evenly sm:items-center gap-24 p-[50px] hidden">
      <div className="flex flex-col items-start justify-start w-full h-full gap-2">
        <h2 className="text-xl font-bold capitalize">
          Chancellor Hassan&apos;s Bazaar
        </h2>
        <p className="w-1/2">Experience the Selection For Yourself!</p>
      </div>
      <div className="flex flex-col items-start justify-start w-full h-full gap-2">
        <h2 className="text-xl font-bold capitalize">Browse</h2>
        <ul className="flex flex-col" role="list">
          <li>
            <Link to={"/"} className="w-full">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/products/1"} className="w-full">
              Products
            </Link>
          </li>
          <li>
            <Link to={"/wish-list"} className="w-full">
              Wish List
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="w-full">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="w-full">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-start w-full h-full gap-2">
        <h2 className="text-xl font-bold capitalize">Services</h2>
        <ul className="flex flex-col" role="list">
          <li>Trade</li>
          <li>Exchange</li>
          <li>Appraisal</li>
          <li>Special Orders</li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-start w-full h-full gap-2">
        <h2 className="text-xl font-bold capitalize ">Contact</h2>
        <ul className="flex flex-col" role="list">
          <li className="flex items-center justify-start gap-2">
            <GiPin /> <span>Al Kharid, Gielinor</span>
          </li>
          <li className="flex items-center justify-start gap-2">
            <GiLetterBomb /> <span>hassan@email.com</span>
          </li>
          <li className="flex items-center justify-start gap-2">
            <GiPhone /> <span>555-5555</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
