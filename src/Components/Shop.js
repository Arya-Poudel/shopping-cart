import React from "react";
import {Link} from "react-router-dom";
import Dresses from './Data';

const Shop = () =>{
	
	return (
	<div>
		<h1>Shop</h1>
		<div className="clothes-container">
		{Dresses.map((dress) => (
			<div className="clothes" key={dress.id}>
			<Link to={`/shop/${dress.id}`}>
				<img src={dress.src} alt={dress.name} />
				<p>{dress.name} - Nrs.{dress.price}</p>
			</Link>
			</div>
		))}
		</div>
	</div>
	);
};

export default Shop;