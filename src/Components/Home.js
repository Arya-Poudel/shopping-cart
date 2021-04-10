import React from "react";
import { Link } from "react-router-dom";

import background from "./Images/background.jpg";

const Home = () =>{
	return (
		<div className="home-container">
					<img src={background} alt="fashionable woman" className="home-image"/>
					<div className="home-description">
						<h1>Styles4U</h1>
						<h2>The best clothes you can get at an affordable price!</h2>
						<Link to="/shop">
							<button className="shop-btn">Start Shopping</button>
						</Link>
					</div>
		</div>
	);

};

export default Home;