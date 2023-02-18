import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [pizzaData, setPizzaData] = useState();

	const [count, setCount] = useState(0);

	const fetchPizzaData = async () => {
		const res = await fetch("http://localhost:3000/api/pizzas");
		let data = await res.json();
		setPizzaData(data);
	};

	fetchPizzaData();
	return (
		<div className="App">
			<div className="header-main">
				<img id="site-logo" src="../images/logo-pizza.jpg"></img>
			</div>
			<div className="body-main">
				<div id="Searchbox-container">
					<h2>Search for the pizza of your dreams!</h2>
				</div>
				<div id="Result-container">
					<h2>
						<u>Results</u>
					</h2>
				</div>
				<div id="Cart-container">
					<h2>Cart</h2>
					<img id="cart-icon" src="../images/cart.png"></img>
				</div>
			</div>

			<div className="footer-main">
				<h3>
					<u>Order summary</u>
				</h3>
			</div>
		</div>
	);
}

export default App;
