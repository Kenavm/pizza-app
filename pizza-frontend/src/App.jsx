import { useState, useEffect } from "react";

import "./App.css";
import PizzaList from "./features/pizzalist/PizzaList";
import fetchPizzaData from "./api/fetchPizza";
import OrderForm from "./features/order/OrderForm";
import Filters from "./features//filters/Filters";
import fetchAllergensData from "./api/fetchAllergens";
import Cart from "./component/Cart";

function App() {
  const [pizzaData, setPizzaData] = useState([]);
  const [allergenData, setAllergenData] = useState([]);
  const [cartContents, setCartContents] = useState([])

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

  function handleAddToCart(name, price) {
    const newContent = {
      name: name,
      price: price
    }
    const newCart = [...cartContents, newContent]
    console.log(newCart)
    setCartContents(newCart)
  }

  return (
    <div className="App">
      <div className="header-main">
        <img id="site-logo" src="./src/assets/images/logo-pizza.jpg"></img>
      </div>
      <div className="body-main">
        <div id="Searchbox-container">
          <h2>Search for the pizza of your dreams!</h2>
          <Filters
          allergenData={allergenData}
          isSetPizzaData={setPizzaData}
          />
        </div>
        <div id="Result-container">
          <h2>
            <u>Results</u>
          </h2>
          <PizzaList pizzas={pizzaData} handleAddToCart={handleAddToCart}></PizzaList>
          {/*<PizzaList pizzas={isFilteredByAllergen ? dataFilteredByAllergen : pizzaData}></PizzaList>*/}
        </div>
        <div id="Cart-container">
          <h2>Cart</h2>
          <img id="cart-icon" src="./src/assets/images/cart.png"></img>
          <Cart cartContents={cartContents}/>
        </div>
      </div>
    <div>

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
