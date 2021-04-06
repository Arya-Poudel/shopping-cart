import React, {useState} from "react";

const CartItem = (props) =>{
	
	const {cartItem, shoppingCart, removeItemFromCart} = props;

	const [quantity, setQuantity] = useState(1);
	const [subtotal, setSubtotal] = useState(cartItem.price);

	const increaseQuantity = () => {
		setQuantity(quantity+1);
		setSubtotal(subtotal + cartItem.price);
	}

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity-1);
			setSubtotal(subtotal - cartItem.price);
		}
	}

	const deleteItem = (e) =>{
		removeItemFromCart(cartItem.id);
	}

	return(
		<div className="cart-items">
			<img src= {cartItem.src} alt = {cartItem.src} />
			<div>
			<p>{cartItem.name}</p>
			<p>Nrs. {cartItem.price}</p>
			<div className="quantity">
				<span className="material-icons-outlined" onClick={increaseQuantity}>add_circle</span>
				<p>Quantity: {quantity} </p>
				<span className="material-icons-outlined" onClick={decreaseQuantity}>remove_circle</span>
			</div>
			<p>Subtotal: {subtotal}</p>
			<button onClick={deleteItem}>Remove item</button>
			</div>
			
		</div>
	)
}

export default CartItem;