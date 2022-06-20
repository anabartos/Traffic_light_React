import React from "react";
import Lights from "./lights.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<div className="trafficTop"></div>
			<div className="container">
				<Lights />
			</div>
		</div>
	);
};

export default Home;
