import { buttonVariants } from "@/components/ui/button-variants";
import { useCartCount } from "@/providers/cart-count-provider/context/useCartCount";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const { cartCount } = useCartCount();
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
      name: (
        <div className="relative">
          <GiShoppingCart size={30} />
          {cartCount > 0 && (
            <span className="absolute flex items-center justify-center text-xs text-gray-200 rounded-full top-1.5 size-2 right-1.5">
              {cartCount}
            </span>
          )}
        </div>
      ),
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
