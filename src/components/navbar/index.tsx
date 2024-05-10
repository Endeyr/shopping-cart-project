import logo from "@/assets/images/flag.webp";
import { Link } from "react-router-dom";
import { ModeToggle } from "../theme-toggle";
import NavLinks from "./nav-links";
import SearchBar from "./search-bar";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 hidden w-full border-b bg-os_header_lite dark:bg-os_header_dark md:block">
      <div className="grid items-center h-16 grid-cols-5 p-4">
        <Link to={"/"} className="w-full">
          <img
            src={logo}
            alt="flag logo"
            className="h-[50px] w-[125px] object-scale-down rounded-full"
            loading="lazy"
          />
        </Link>
        <SearchBar />
        <ul className="flex items-center justify-between w-full col-span-2 col-start-4 gap-4 mx-4 space-x-1">
          <li>
            <ModeToggle />
          </li>
          <NavLinks />
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
