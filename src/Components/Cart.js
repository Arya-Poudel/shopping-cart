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
	}, [shoppingCart])

	return (
		<div className="cart-container">
		<h1>Cart</h1>
		{shoppingCart.map((cartItem) => (
			<CartItems 
					  key={cartItem.name}
					  cartItem={cartItem} 
					  removeItemFromCart={removeItemFromCart}
					  changeTotal={changeTotal}
			/>
		))}

		{isEmpty && <div>
			<h2>Cart is empty</h2>
		</div>
		}

		{!isEmpty && <div>
			<p>Total:{total}</p>
			<Link to="/checkout"> 
				<button>Checkout</button>
			</Link>
		</div>
		}
		

		<Link to="/shop">
			<button>Back to shop</button>
		</Link>
		</div>
	);
};

export default Cart;