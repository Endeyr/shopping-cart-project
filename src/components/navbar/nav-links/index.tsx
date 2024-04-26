import { buttonVariants } from "@/components/ui/button";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const links = [
    {
      id: 1,
      url: "/about",
      name: "About",
    },
    {
      id: 2,
      url: "/contact",
      name: "Contact",
    },
    {
      id: 3,
      url: "/wish-list",
      name: "Wish List",
    },
    {
      id: 4,
      url: "/cart",
      name: <GiShoppingCart size={30} />,
    },
  ];
  return (
    <div className="flex items-center justify-center">
      {links.map((link) => (
        <li key={link.id}>
          <Link to={link.url} className={buttonVariants({ variant: "link" })}>
            {link.name}
          </Link>
        </li>
      ))}
    </div>
  );
};
export default NavLinks;
