import React, { useState } from "react";

const Lights = () => {
	const [normal, setShadow] = useState(" ");

	return (
		<>
			<div
				className={"red light" + (normal === "red" ? " selected" : " ")}
				onClick={() => setShadow("red")}></div>
			<div
				className={
					"yellow light" + (normal === "yellow" ? " selected" : " ")
				}
				onClick={() => setShadow("yellow")}></div>

			<div
				className={
					"green light" + (normal === "green" ? " selected" : " ")
				}
				onClick={() => setShadow("green")}></div>
		</>
	);
};

export default Lights;
