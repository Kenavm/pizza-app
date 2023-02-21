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
import NameFilter from "./component/NameFilter";
import OrderForm from "./component/OrderForm";
import FilterComponent from "./component/FilterComponent";

let isFilteredByAllergen = false;
let isFilteredByName = false;

function App() {
  const [pizzaData, setPizzaData] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [allergenData, setAllergenData] = useState([]);

  //todo: two states min, max, variable pizzaList
  //filter price and allergen

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

  async function filterPizzas(minPrice, maxPrice) {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);

    let filteredData = await fetchPizzas({
      minPrice: minPrice,
      maxPrice: maxPrice,
    });

    setPizzaData(filteredData);
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

  return (
    <div className="App">
      <div className="header-main">
        <img id="site-logo" src="../images/logo-pizza.jpg"></img>
      </div>
      <div className="body-main">
        <div id="Searchbox-container">
          <h2>Search for the pizza of your dreams!</h2>
          <FilterComponent />
        </div>
        <div id="Result-container">
          <h2>
            <u>Results</u>
          </h2>
          <PizzaList pizzas={pizzaData}></PizzaList>
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
