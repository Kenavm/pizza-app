import React, { useState } from "react";

export default function NameFilter() {
	const [userInput, setUserInput] = useState();

	return (
		<div>
			<input
				onChange={(e) => setUserInput(userInput)}
				value={userInput}
				placeholder="Type in pizza name"
			></input>
		</div>
	);
}
