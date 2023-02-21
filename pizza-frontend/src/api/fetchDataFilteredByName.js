async function fetchDataFilteredByName({ NameToFilter }) {
	//const url = `http://localhost:3000/api/pizzas?avoid-pizza-by-name=${NameToFilter}`;
	const url = `http://localhost:3000/api/pizzas?name=${NameToFilter}`;
	let res = await fetch(url);
	let filteredData = await res.json();
	return filteredData;
}

export default fetchDataFilteredByName;
