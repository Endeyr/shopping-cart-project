import { buttonVariants } from "@/components/ui/button";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const links = [
    {
      url: "/about",
      name: "About",
    },
    {
      url: "/contact",
      name: "Contact",
    },
    {
      url: "/wish-list",
      name: "Wish List",
    },
    {
      url: "/cart",
      name: <GiShoppingCart size={30} />,
    },
  ];
  return (
    <div className="flex justify-center items-center">
      {links.map((link) => (
        <Link to={link.url} className={buttonVariants({ variant: "link" })}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};
export default NavLinks;
