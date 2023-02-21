import NameFilter from "./component/NameFilter";
import { useState, useEffect } from "react";
import fetchDataFilteredByPrice from "./api/fetchDataFilteredByPrice";

import fetchDataFilteredByAllergen from "./api/fetchDataFilteredByAllergen";

import "./App.css";
import PizzaList from "./component/PizzaList";
import PriceFilter from "./component/PriceFilter";
import data from "./api/fetchPizza";
import allergensData from "./api/fetchAllergens"

import AllergensFilter from "./component/AllergensFilter";

let isFiltered = false;
let isFilteredByAllergen = false;

function App() {
  const [pizzaData, setPizzaData] = useState([]);
  const [DataFilteredByPrice, setDataFilteredByPrice] = useState([]);

  const [allergenData, setAllergenData] = useState([]);
  const [dataFilteredByAllergen, setDataFilteredByAllergen] = useState([]);

  useEffect(() => {
   setPizzaData(data);
  }, []);

  useEffect(() => {
    setAllergenData(allergensData);
   }, []);

  async function filterByPrice(minPrice, maxPrice) {
    if (minPrice === "" && maxPrice === "") {
      setDataFilteredByPrice(pizzaData);
      isFiltered = false;
    } else {
      let filteredData = await fetchDataFilteredByPrice({minPrice: minPrice, maxPrice: maxPrice});
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
      let filteredData = await fetchDataFilteredByAllergen({allergenToFilter: allergenToFilter});
      isFilteredByAllergen = true;
      setDataFilteredByAllergen(filteredData);
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
          {<PriceFilter filterByPrice={filterByPrice} />}
          {<AllergensFilter allergens={allergenData} filterByAllergen={filterByAllergen}/>}
        </div>
        <div id="Result-container">
          <h2>
            <u>Results</u>
          </h2>
          <PizzaList pizzas={isFiltered ? DataFilteredByPrice : pizzaData}></PizzaList>
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
      </div>
    </div>
  );
}

export default App;
