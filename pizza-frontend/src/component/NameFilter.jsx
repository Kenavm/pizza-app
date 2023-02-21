import React, { useState } from "react";
import "./NameFilter.css";
//import fetchPizzaData from "../api/fetchPizza";

export default function NameFilter(props) {
	const [userInput, setUserInput] = useState();

	// let filteredData = fetchPizzaData();
	// const prom = Promise.resolve(filteredData);

	// prom.then((value) => {
	// 	console.log(value);

	// 	const nameArray = value.map((obj) => obj.name);

	// 	console.log(nameArray);
	// });

	function handleSubmit(event) {
		event.preventDefault();
		props.onNameInput(userInput);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => setUserInput(userInput)}
					value={userInput}
					placeholder="Type in pizza name"
				></input>
				<button type="submit" className="filter-button">
					Filter
				</button>
			</form>
		</div>
	);
}
