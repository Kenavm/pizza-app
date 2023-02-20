import NameFilter from "./component/NameFilter";
import { useState, useEffect } from "react";
import fetchDataFilteredByPrice from "./api/fetchDataFilteredByPrice";
import "./App.css";
import PizzaList from "./component/PizzaList";
import PriceFilter from "./component/PriceFilter";
import data from "./api/fetchPizza";

let isFiltered = false;

function App() {
  const [pizzaData, setPizzaData] = useState([]);
  const [DataFilteredByPrice, setDataFilteredByPrice] = useState([]);

  useEffect(() => {
   setPizzaData(data);
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
  return (
    <div className="App">
      <div className="header-main">
        <img id="site-logo" src="../images/logo-pizza.jpg"></img>
      </div>
      <div className="body-main">
        <div id="Searchbox-container">
          <h2>Search for the pizza of your dreams!</h2>
          {<PriceFilter filterByPrice={filterByPrice} />}
        </div>
        <div id="Result-container">
          <h2>
            <u>Results</u>
          </h2>
          <PizzaList pizzas={isFiltered ? DataFilteredByPrice : pizzaData}></PizzaList>
        </div>
        <div id="Cart-container">
          <h2>Cart</h2>
          <img id="cart-icon" src="./images/cart.png"></img>
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
