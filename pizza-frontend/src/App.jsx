import NameFilter from "./component/NameFilter";
import { useState, useEffect } from "react";
import fetchPriceFilter from "./api/fetchFilteredDataByPrice";
import "./App.css";
import PizzaList from "./component/PizzaList";
import PriceFilter from "./component/PriceFilter";
import data from "./api/fetchPizza";

let filtered = false;

function App() {
  const [pizzaData, setPizzaData] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);

  useEffect(() => {
    setPizzaData(data);
  }, []);
  
    async function filterByPrice(min, max) {
      if (min === "" && max === "") {
        setPriceFilter(pizzaData);
        filtered = false;
      } else {
        let filteredData = await fetchPriceFilter(min, max);
        filtered = true;
		console.log(filteredData)
		
        setPriceFilter(filteredData);
      }
    }
	useEffect(() => {
		console.log(priceFilter);
	  }, [priceFilter]);

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
            <PizzaList pizzas={filtered ? priceFilter : pizzaData}></PizzaList>;
          </h2>
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
