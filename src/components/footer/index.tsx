import { GiLetterBomb, GiPhone, GiPin } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="w-full sm:grid sm:grid-cols-4 sm:justify-between sm:items-center gap-3 p-[50px] hidden">
      <div className="flex flex-col justify-start items-start gap-2 w-full h-full">
        <h2 className="font-bold capitalize text-xl">Business Name</h2>
        <p className="w-1/2">Catchphrase</p>
      </div>

      <div className="flex flex-col justify-start items-start gap-2 w-full h-full">
        <h2 className="font-bold capitalize text-xl">Browse</h2>
        <ul className="flex flex-col" role="list">
          <li>
            <a href="/" className="w-full">
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="w-full">
              Services
            </a>
          </li>
          <li>
            <a href="/about" className="w-full">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="w-full">
              Contact
            </a>
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
