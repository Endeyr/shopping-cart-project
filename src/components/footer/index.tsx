import { GiLetterBomb, GiPhone, GiPin } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full sm:grid sm:grid-cols-4 sm:justify-evenly sm:items-center gap-24 p-[50px] hidden">
      <div className="flex flex-col justify-start items-start gap-2 w-full h-full">
        <h2 className="font-bold capitalize text-xl">Business Name</h2>
        <p className="w-1/2">Catchphrase</p>
      </div>

      <div className="flex flex-col justify-start items-start gap-2 w-full h-full">
        <h2 className="font-bold capitalize text-xl">Browse</h2>
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
      <div className="flex flex-col justify-start items-start gap-2 w-full h-full">
        <h2 className="font-bold capitalize text-xl">Services</h2>
        <ul className="flex flex-col" role="list">
          <li>List</li>
          <li>of</li>
          <li>Services</li>
          <li>Provided</li>
        </ul>
      </div>
      <div className="flex flex-col justify-start items-start gap-2 w-full h-full">
        <h2 className="font-bold capitalize text-xl ">Contact</h2>
        <ul className="flex flex-col" role="list">
          <li className="flex gap-2 justify-start items-center">
            <GiPin /> <span>Location</span>
          </li>
          <li className="flex gap-2 justify-start items-center">
            <GiLetterBomb /> <span>Email</span>
          </li>
          <li className="flex gap-2 justify-start items-center">
            <GiPhone /> <span>Phone #</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
