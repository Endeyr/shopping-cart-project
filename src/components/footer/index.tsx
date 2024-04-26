import { GiLetterBomb, GiPhone, GiPin } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full sm:grid sm:grid-cols-4 sm:justify-evenly sm:items-center gap-24 p-[50px] hidden">
      <div className="flex flex-col items-start justify-start w-full h-full gap-2">
        <h2 className="text-xl font-bold capitalize">Business Name</h2>
        <p className="w-1/2">Catchphrase</p>
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
            <Link to={"/about"} className="w-full">
              About
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="w-full">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/wish-list"} className="w-full">
              Wish List
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="w-full">
              Cart
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-start w-full h-full gap-2">
        <h2 className="text-xl font-bold capitalize">Services</h2>
        <ul className="flex flex-col" role="list">
          <li>List</li>
          <li>of</li>
          <li>Services</li>
          <li>Provided</li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-start w-full h-full gap-2">
        <h2 className="text-xl font-bold capitalize ">Contact</h2>
        <ul className="flex flex-col" role="list">
          <li className="flex items-center justify-start gap-2">
            <GiPin /> <span>Location</span>
          </li>
          <li className="flex items-center justify-start gap-2">
            <GiLetterBomb /> <span>Email</span>
          </li>
          <li className="flex items-center justify-start gap-2">
            <GiPhone /> <span>Phone #</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
