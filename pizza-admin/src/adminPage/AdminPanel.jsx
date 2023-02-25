import { useState, useEffect } from "react";
import fetchOrderData from "../api/fetchOrderData";
import "./AdminPanel.css";

function AdminPanel() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrdersData() {
      setOrders(await fetchOrderData());
    }
    loadOrdersData();
  }, []);
  console.log(orders);

  function toggleStatus(status, id) {
   
  }

  return (
    <div className="order-container">
      <h2>ORDERS</h2>
      {orders.map((order) => {
        return (
          <div>
            {order.pizzas.map((pizza) => {
              <div>
                <p>{pizza.id}</p>
                <p>{pizza.amount}</p>
              </div>;
            })}
            <h3> Order time</h3>
            <div className="date">
              <p>
                {order.date.year}-{order.date.month}-{order.date.day}{" "}
              </p>
              <p>
                {order.date.hour}h{order.date.minute}
              </p>
            </div>
            <h3>Customer</h3>
            <div>
              <p>{order.customer.name}</p>
              <p>{order.customer.email}</p>
              <p>{order.customer.city}</p>
              <p>{order.customer.street}</p>
            </div>
            <p>Status: {order.completed ? "Done" : "Not done"}</p>

            <div>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => toggleStatus(e.target.checked, order.id)}
              ></input>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdminPanel;
