import React, {useState} from "react";

const CartItem = (props) =>{
	
	const {cartItem, removeItemFromCart, changeTotal} = props;

	const [quantity, setQuantity] = useState(cartItem.quantity);
	const [subtotal, setSubtotal] = useState(cartItem.price * cartItem.quantity);

	const increaseQuantity = () => {
		setQuantity(quantity+1);
		cartItem.quantity = cartItem.quantity + 1;
		setSubtotal(cartItem.price * cartItem.quantity);
		changeTotal();
	}

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity-1);
			cartItem.quantity = cartItem.quantity - 1; 
			setSubtotal(cartItem.price * cartItem.quantity);
			changeTotal();
		}
	}

	const deleteItem = () =>{
		removeItemFromCart(cartItem.id);
	}

	return(
		<div className="cart-items">
			<img src= {cartItem.src} alt = {cartItem.src} />
			<div>
				<p>{cartItem.name}</p>
				<p>Nrs. {cartItem.price}</p>
				<div className="quantity">
					<span className="material-icons-outlined" onClick={decreaseQuantity}>remove_circle</span>
					<p>Quantity: {quantity} </p>
					<span className="material-icons-outlined" onClick={increaseQuantity}>add_circle</span>
				</div>
				<p>Subtotal: {subtotal}</p>
				<button onClick={deleteItem}>Remove item</button>
			</div>
		</div>
	)
}

export default CartItem;