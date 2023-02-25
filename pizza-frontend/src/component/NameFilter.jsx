import "./NameFilter.css";

export default function NameFilter(props) {
	// let filteredData = fetchPizzaData();
	// const prom = Promise.resolve(filteredData);

	// prom.then((value) => {
	// 	console.log(value);

	// 	const nameArray = value.map((obj) => obj.name);

	// 	console.log(nameArray);
	// });

	return (
		<div className="name-filters">
			<div className="name-label">Name</div>
			<input
				onChange={(e) => props.onSetName(e.target.value)}
				placeholder="Type in pizza name"
			></input>
		</div>
	);
}
