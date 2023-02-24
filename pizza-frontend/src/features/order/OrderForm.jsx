import { useState } from "react";
import Button from "../../component/ButtonComponent";
import "./OrderForm.css";
import fetchPostOrder from "../../api/fetchPostOrder";

export default function OrderForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const isValidated = email.includes("@") && email.includes(".");
  const emailFieldEmpty = email !== "";

  function createOrderObject() {
    let order = {};
    let date = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
    };

    let customer = {
      name: name,
      email: email,
      adress: {
        city: city,
        street: street,
      },
    };

    order = { pizzas: props.pizzas, date, customer, completed: false };
    console.log(order);
    fetchPostOrder(order);
  }
  return (
    <div className="order-form">
      <input
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>{" "}
      <div className="email-container">
        <input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        {isValidated && emailFieldEmpty ? (
          <p style={{ color: "green", margin: "5px", fontSize: "15px" }}>
            {" "}
            valid email address{" "}
          </p>
        ) : (
          <p style={{ color: "red", margin: "5px", fontSize: "15px" }}>
            {" "}
            invalid email address
          </p>
        )}
      </div>{" "}
      <input
        placeholder="street"
        value={street}
        onChange={(event) => setStreet(event.target.value)}
      ></input>
      <input
        placeholder="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      ></input>
      <Button
        onClick={() => createOrderObject()}
        buttonClassName={"order-button"}
        buttonName={"Order"}
      />
    </div>
  );
}
