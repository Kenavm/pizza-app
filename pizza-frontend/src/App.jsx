import { useState, useEffect } from "react";

import "./App.css";
import PizzaList from "./component/PizzaList";
import fetchPizzaData from "./api/fetchPizza";
import OrderForm from "./component/OrderForm";
import FilterComponent from "./component/FilterComponent";
import fetchAllergensData from "./api/fetchAllergens";

function App() {
  const [pizzaData, setPizzaData] = useState([]);
  const [allergenData, setAllergenData] = useState([]);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [name, setName] = useState();
  const [allergen, setAllergen] = useState();

  useEffect(() => {
    async function loadPizzaData() {
      setPizzaData(await fetchPizzaData(pizzaData));
    }
    loadPizzaData();
  }, []);

  useEffect(() => {
    async function loadAllergenData() {
      setAllergenData(await fetchAllergensData());
    }
		loadAllergenData();
	}, []);

  async function filterPizzas() {
    console.log(name)
    console.log(minPrice)
    console.log(maxPrice)
 
    let allergenToFilter = allergenData.filter(allergenFromData => allergenFromData.name === allergen)
  
    let filteredData = await fetchPizzaData({
      pizzaName: name,
      minPrice: minPrice,
      maxPrice: maxPrice,
      allergen: allergenToFilter[0],
    });

    setPizzaData(filteredData);
  }

  return (
    <div className="App">
      <div className="header-main">
        <img id="site-logo" src="../images/logo-pizza.jpg"></img>
      </div>
      <div className="body-main">
        <div id="Searchbox-container">
          <h2>Search for the pizza of your dreams!</h2>
          <FilterComponent 
          isSetMinPrice={setMinPrice}
          isSetMaxPrice={setMaxPrice}
          isSetName={setName}
          isSetAllergen={setAllergen}
          isFilterPizzas={filterPizzas}
          allergenData={allergenData}
          />
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
