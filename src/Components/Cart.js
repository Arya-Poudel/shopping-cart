import React,{ useState, useEffect } from "react";
import CartItems from './CartItems';
import { Link } from "react-router-dom";

const Cart = ({shoppingCart, addItemToCart, removeItemFromCart}) =>{

	let [total, setTotal] = useState(0)

	const [isEmpty, setIsEmpty] = useState(false);

	const changeTotal = () =>{
		total = 0;
		for(let i = 0; i < shoppingCart.length; i++) {
			total = total + shoppingCart[i].price * shoppingCart[i].quantity;
			setTotal(total);
		} 
	}

	useEffect(() => {
		changeTotal();
		if (shoppingCart.length === 0) {
			setIsEmpty(true);
		}
		//eslint-disable-next-line
	}, [shoppingCart])

	return (
		<div className="cart-container">
		<h1 className="cart-topic">Your Cart</h1>
		{shoppingCart.map((cartItem) => (
			<CartItems 
					  key={cartItem.name}
					  cartItem={cartItem} 
					  removeItemFromCart={removeItemFromCart}
					  changeTotal={changeTotal}
			/>
		))}

		{isEmpty &&
			<h2 className="empty-cart">Cart is empty</h2>
		}

		{!isEmpty && <div>
			<p className="total">Total: Nrs.{total}</p>
			<Link to="/checkout"> 
				<button className="checkout-btn">Checkout</button>
			</Link>
		</div>
		}
		

		<Link to="/shop">
			<button className="cancel-btn">Back to shop</button>
		</Link>
		</div>
	);
};

export default Cart;