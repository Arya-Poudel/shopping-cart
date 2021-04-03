import React from "react";
import background from "./Images/background.jpg";

const Home = () =>{
	return (
		<div className="home-container">
					<img src={background} alt="fashionable woman" className="home-image"/>
					<div className="home-description">
						<h1>Styles4U</h1>
						<h2>The best clothes you can get at an affordable price!</h2>
						<button className="shop-btn">Start Shopping</button>
					</div>
		</div>
	);

};

export default Home;