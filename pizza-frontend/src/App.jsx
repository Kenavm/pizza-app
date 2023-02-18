import { useState } from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="header-main">
				<img id="site-logo" src="../images/logo-pizza.jpg"></img>
			</div>
			<div className="body-main"></div>
			<div id="Searchbox-container"></div>
			<div id="Result-container"></div>
			<div id="Cart-container"></div>
			<div className="footer-main"></div>
		</div>
	);
}

export default App;
