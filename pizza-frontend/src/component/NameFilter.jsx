import "./NameFilter.css";

export default function NameFilter(props) {
  // let filteredData = fetchPizzaData();
  // const prom = Promise.resolve(filteredData);

<<<<<<< HEAD
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
=======
  // prom.then((value) => {
  // 	console.log(value);

  // 	const nameArray = value.map((obj) => obj.name);

  // 	console.log(nameArray);
  // });

  return (
    <div>
      <input
        onChange={(e) => props.isSetName(e.target.value)}
        placeholder="Type in pizza name"
      ></input>
    </div>
  );
>>>>>>> f7da5594f66dd2cef540e1db71041b7ba0b0ba9c
}
