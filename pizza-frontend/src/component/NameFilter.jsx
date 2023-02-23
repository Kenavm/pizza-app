import React, { useState } from "react";
import "./NameFilter.css";

export default function NameFilter(props) {
	const [userInput, setUserInput] = useState();

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
