import React from "react";
import CartItems from './CartItems';
import { Link } from "react-router-dom";


const Cart = ({shoppingCart, addItemToCart, removeItemFromCart}) =>{

	return (
		<div className="cart-container">
		<h1>Cart</h1>
		{shoppingCart.map((cartItem) => (
			<CartItems 
					  key={cartItem.name}
					  cartItem={cartItem} 
					  shoppingCart={shoppingCart}
					  removeItemFromCart={removeItemFromCart}
			/>
		))}
		<p>Total: </p>
		<Link to="/checkout"> 
			<button>Checkout</button>
		</Link>
		<Link to="/shop">
			<button>Back to shop</button>
		</Link>
		</div>
	);
};

export default Cart;