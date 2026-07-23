import logo from "../assets/logo.png";
import card from "../assets/default.png";
import CartIcon from "../assets/CartIcon";
const Navbar = () => {
  return (
    <div>
      <img src={logo} />
      <input type="text" placeholder="Search" />
      <CartIcon />
      s
      <img src={card} />
    </div>
  );
};

export default Navbar;
