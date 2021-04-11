import { Link } from "react-router-dom";
import React from "react";

const Navbar = ({shoppingCart}) =>{
	return(
	<nav className="navbar ">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/shop" className="nav-link">SHOP</Link>
        <Link to="/cart" className="nav-link">CART({shoppingCart.length})</Link>
   </nav>
   )
}

export default Navbar;