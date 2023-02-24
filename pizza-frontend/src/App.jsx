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
  const [cartContents, setCartContents] = useState([]);
  const [total, setTotal] = useState(0);

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

  function addItem(name, price, id) {
    const cartItem = {
      id:id,
      name: name,
      price: price,
      amount: 1,
    };
    return cartItem;
  }

  function handleAddToCart(name, price, id) {
    let alreadyContainsItem = false;
    cartContents.forEach((item) => {
      if (item.id === id) {
        item.amount++;
        alreadyContainsItem = true;
      }
    });

    if (alreadyContainsItem) {
      setCartContents([...cartContents]);
    } else {
      setCartContents([...cartContents, addItem(name, price, id)]);
    }
  }
  console.log(cartContents);
  useEffect( () => {
     function calculateTotal() {
      const initialValue = 0;
      const total = cartContents.reduce(
        (accumulator, content) => accumulator + content.price * content.amount,
        initialValue
      );
      setTotal(total)
    }
   calculateTotal();
  }, [cartContents]);
  console.log(total);
  
  return (
    <div className="App">
      <div className="header-main">
        <img id="site-logo" src="./src/assets/images/logo-pizza.jpg"></img>
      </div>
      <div className="body-main">
        <div id="Searchbox-container">
          <h2>Search for the pizza of your dreams!</h2>
          <Filters allergenData={allergenData} onSetPizzaData={setPizzaData} />
        </div>
        <div id="Result-container">
          <h2>
            <u>Results</u>
          </h2>
          <PizzaList
            pizzas={pizzaData}
            handleAddToCart={handleAddToCart}
          ></PizzaList>
          {/*<PizzaList pizzas={isFilteredByAllergen ? dataFilteredByAllergen : pizzaData}></PizzaList>*/}
        </div>
        <div id="Cart-container">
          <h2>Cart</h2>
          <img id="cart-icon" src="./src/assets/images/cart.png"></img>
          <Cart cartContents={cartContents} total={total} />
        </div>
      </div>
      <div></div>
      <div className="footer-main">
        <h3>
          <u>Order summary</u>
        </h3>
        <OrderForm pizzas={cartContents}/>
      </div>
    </div>
  );
}

export default App;
