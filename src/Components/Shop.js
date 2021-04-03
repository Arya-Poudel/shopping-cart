import React from "react";
import pic1 from "./Images/blackdress.jpg";
import pic2 from "./Images/blackjacket.jpg";
import pic3 from "./Images/browncoat.jpg";
import pic4 from "./Images/greenjacket.jpg";
import pic5 from "./Images/reddress.jpg";
import pic6 from "./Images/printtedtshirt.jpg";
import pic7 from "./Images/greyhoodie.jpg";
import pic8 from "./Images/whitehoodie.jpg";
import {Link} from "react-router-dom";

const Shop = () =>{
	const dresses = [
	{
		src: pic1,
		name: 'Black dress',
		price: 'Nrs 2000'
	},
	{
		src: pic2,
		name: 'Black jacket',
		price: 'Nrs 3000'
	},
	{
		src: pic3,
		name: 'Brown coat',
		price: 'Nrs 4000'
	},
	{
		src: pic4,
		name: 'Green jacket',
		price: 'Nrs 2500'
	},
	{
		src: pic5,
		name: 'Red Dress',
		price: 'Nrs 2700'
	},
	{
		src: pic6,
		name: 'Printed tshirt',
		price: 'Nrs. 750'
	},
	{
		src: pic7,
		name: 'Grey Hoodie',
		price: 'Nrs 1500'
	},
	{
		src: pic8,
		name: 'White hoodie',
		price: 'Nrs 1600'
	},
	]
	return (
	<div>
		<h1>Shop</h1>
		<div className="clothes-container">
		{dresses.map((dress) => (
			<div className="clothes" key={dress.name}>
				<img src={dress.src} alt={dress.name} />
				<p>{dress.name} -  {dress.price}</p>
			</div>
		))}
		</div>
	</div>
	);
};

export default Shop;