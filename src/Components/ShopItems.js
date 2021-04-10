import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Dresses from './Data';


const ShopItem = ({dressId, addItemToCart, shoppingCart}) =>{

	const item = {
			id: shoppingCart.length,
			src : Dresses[dressId].src,
			name : Dresses[dressId].name,
			price : Dresses[dressId].price,
			quantity: 1,
		}

	const [clickedItem, setClickedItem] = useState(false);

	const [isInCart, setIsInCart] = useState(false);

	const handleBtnClick = (e) =>{
		  if (shoppingCart.some(e=>e.name === item.name)) {
	            setIsInCart(true);
      	  }else{
      	  		setClickedItem(true);
         		addItemToCart(item);
      	  }
	}

	return (
	  <div className="cloth-item">
	  <img src={item.src} alt={item.name} />
	  <div className="cloth-item-desc">
			<h2>{item.name} </h2>
			<h2>Nrs.{item.price} </h2>
			{!clickedItem && 
				<button className="add-to-cart-btn" onClick={handleBtnClick}>Add to Cart</button>
			}
			{clickedItem && <div className="clicked-item">
				 	Your item has been added to cart.
				 	<Link to="/cart">
				 		<button className="view-cart-btn">View Cart</button> 
				 	</Link>
			  </div>
			}
			{isInCart && <div className="clicked-item">
					Item is already in cart.
					<Link to="/cart">
						<button className="view-cart-btn">View Cart</button>
					</Link>
			   </div>
			}
			<Link to="/shop">
				<button className="cancel-btn" >Go back</button>
			</Link>
			
	  </div>
	  </div>
	);
};

export default ShopItem;