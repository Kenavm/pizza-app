import NameFilter from "./component/NameFilter";
import { useState, useEffect } from "react";
import fetchDataFilteredByPrice from "./api/fetchDataFilteredByPrice";
import fetchDataFilteredByName from "./api/fetchDataFilteredByName";
import fetchDataFilteredByAllergen from "./api/fetchDataFilteredByAllergen";

import "./App.css";
import PizzaList from "./component/PizzaList";
import PriceFilter from "./component/PriceFilter";
import allergensData from "./api/fetchAllergens";
import fetchPizzaData from "./api/fetchPizza";
import AllergensFilter from "./component/AllergensFilter";
import OrderForm from "./component/OrderForm";

let isFiltered = false; //if needed -> state
let isFilteredByAllergen = false;
let isFilteredByName = false;

function App() {
	const [pizzaData, setPizzaData] = useState([]);
	const [dataFilteredByPrice, setDataFilteredByPrice] = useState([]);

	//todo: two states min, max, variable pizzaList
	//filter price and allergen

	const [allergenData, setAllergenData] = useState([]);
	const [dataFilteredByAllergen, setDataFilteredByAllergen] = useState([]);

	const [dataFilteredByName, setDataFilteredByName] = useState([]);

	useEffect(() => {
		async function loadPizzaData() {
			setPizzaData(await fetchPizzaData());
		}
		loadPizzaData();
	}, []);

	//todo
	useEffect(() => {
		setAllergenData(allergensData);
	}, []);

	async function filterByPrice(minPrice, maxPrice) {
		if (minPrice === "" && maxPrice === "") {
			setDataFilteredByPrice(pizzaData);
			isFiltered = false;
		} else {
			let filteredData = await fetchDataFilteredByPrice({
				minPrice: minPrice,
				maxPrice: maxPrice,
			});
			isFiltered = true;
			setDataFilteredByPrice(filteredData);
		}
	}

	console.log(pizzaData);

	async function filterByAllergen(allergenToFilter) {
		if (allergenToFilter === "") {
			setDataFilteredByAllergen(pizzaData);
			isFilteredByAllergen = false;
		} else {
			let filteredData = await fetchDataFilteredByAllergen({
				allergenToFilter: allergenToFilter,
			});
			isFilteredByAllergen = true;
			setDataFilteredByAllergen(filteredData);
		}
	}

	async function onNameInput(NameToFilter) {
		if (NameToFilter === "") {
			setDataFilteredByName(pizzaData);
			isFilteredByName = false;
		} else {
			let filteredData = await fetchDataFilteredByName({
				NameToFilter: NameToFilter,
			});
			isFilteredByName = true;
			setDataFilteredByName(filteredData);
		}
	}

	return (
		<div className="App">
			<div className="header-main">
				<img id="site-logo" src="../images/logo-pizza.jpg"></img>
			</div>
			<div className="body-main">
				<div id="Searchbox-container">
					<h2>Search for the pizza of your dreams!</h2>
					{<PriceFilter onFilterByPrice={filterByPrice} />}
					{
						<AllergensFilter
							allergens={allergenData}
							filterByAllergen={filterByAllergen}
						/>
					}
					{<NameFilter onNameInput={onNameInput}></NameFilter>}
				</div>
				<div id="Result-container">
					<h2>
						<u>Results</u>
					</h2>
					<PizzaList
						pizzas={isFiltered ? dataFilteredByPrice : pizzaData}
					></PizzaList>
					{/*<PizzaList pizzas={isFilteredByAllergen ? dataFilteredByAllergen : pizzaData}></PizzaList>*/}
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
				<OrderForm />
			</div>
		</div>
	);
}

export default App;
