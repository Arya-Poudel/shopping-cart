import React from "react";
import CartItems from './CartItems';

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
		<button>Checkout</button>
		<button>Back to shop</button>
		</div>
	);
};

export default Cart;