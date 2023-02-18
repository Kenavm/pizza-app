import { useState, useEffect } from "react";

import "./App.css";
import PizzaList from "./component/PizzaList";

function App() {
  const [pizzaData, setPizzaData] = useState([]);

    const fetchPizzaData = async () => {
      const res = await fetch("http://localhost:3000/api/pizzas");
      let data = await res.json();
      return data;
    };

    const loadData = async() => {
      let data = await fetchPizzaData();
      setPizzaData(data);
    }
  
  loadData();

  console.log(pizzaData)
  return (
    <div className="App">
      <div className="header-main">
        <img id="site-logo" src="../images/logo-pizza.jpg"></img>
      </div>
      <div className="body-main">
        <div id="Searchbox-container">
          <h2>Search for the pizza of your dreams!</h2>
        </div>
        <div id="Result-container">
          <h2>
            <u>Results</u>
            {pizzaData.map((pizza) => {
              return <PizzaList
                id={pizza.id}
                name={pizza.name}
                ingredients={pizza.ingredients}
                allergens={pizza.allergens}
                price={pizza.price}
              ></PizzaList>;
            })}
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
