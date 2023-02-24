import NameFilter from "../../component/NameFilter";
import PriceFilter from "../../component/PriceFilter";
import AllergensFilter from "../../component/AllergensFilter";
import Sort from "../../component/Sort";
import Button from "../../component/ButtonComponent";
import "./Filters.css";
import { useState } from "react";
import fetchPizzaData from "../../api/fetchPizza";

function Filters(props) {

  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [name, setName] = useState();
  const [allergen, setAllergen] = useState();
  const [sorted, setSorted] = useState();

  async function filterPizzas() {
    let allergenToFilter = props.allergenData.find(allergenFromData => allergenFromData.name === allergen)
	
	console.log(allergenToFilter)
    let filteredData = await fetchPizzaData({
      pizzaName: name,
      minPrice: minPrice,
      maxPrice: maxPrice,
      allergen: allergenToFilter,
      sortBy: sorted
    });
    
    props.onSetPizzaData(filteredData);
  }

  return (
    <div className="filter-container">
      <Sort isSetSorted={setSorted}/>

      <NameFilter onSetName={setName} />

      <PriceFilter
        onSetMinPrice={setMinPrice}
        onSetMaxPrice={setMaxPrice}
      />
      <AllergensFilter
        onSetAllergen={setAllergen}
        allergenData={props.allergenData}
      />
      <Button
        onClick={() => filterPizzas()}
        buttonClassName={"filter-button"}
        buttonName={"Filter"}
      />
    </div>
  );
}

export default Filters;
