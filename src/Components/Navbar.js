import { Link } from "react-router-dom";
import React from "react";

const Navbar = ({shoppingCart}) =>{
	return(
	<nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart({shoppingCart.length})</Link>
   </nav>
   )
}

export default Navbar;