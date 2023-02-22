import "./NameFilter.css";
//import fetchPizzaData from "../api/fetchPizza";

export default function NameFilter(props) {
  // let filteredData = fetchPizzaData();
  // const prom = Promise.resolve(filteredData);

  // prom.then((value) => {
  // 	console.log(value);

  // 	const nameArray = value.map((obj) => obj.name);

  // 	console.log(nameArray);
  // });

  return (
    <div>
		<label className="name-label">What pizza would you like?</label>
      <input
        onChange={(e) => props.isSetName(e.target.value)}
        placeholder="Type in pizza name"
      ></input>
    </div>
  );
}
