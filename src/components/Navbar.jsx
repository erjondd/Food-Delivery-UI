import logo from "../assets/logo.png";
import card from "../assets/default.png";
import CartIcon from "../assets/CartIcon";
import SearchBar from "./navbar/SearchBar";
import Menu from "./navbar/Menu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-l">
        <a href="/">
          <img src={logo} className="logo-img" />
        </a>
        <SearchBar />
      </div>
      <div className="navbar-r">
        <Menu />
        <CartIcon />
        <div className="cart-card">
          <img src={card} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
