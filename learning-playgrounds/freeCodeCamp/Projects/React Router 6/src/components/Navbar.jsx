import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">about</NavLink>
      <NavLink to="products">products</NavLink>
    </nav>
  );
};

export default Navbar;
