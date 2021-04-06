import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Dresses from './Data';


const ShopItem = ({dressId, addItemToCart}) =>{

	const item = {
			id: dressId,
			src : Dresses[dressId].src,
			name : Dresses[dressId].name,
			price : Dresses[dressId].price,
		}

	const [clickedItem, setClickedItem] = useState(false);

	// const []

	const handleBtnClick = (e) =>{
		setClickedItem(true);
		addItemToCart(item);
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
				 	<button className="view-cart-btn">View Cart</button> 
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