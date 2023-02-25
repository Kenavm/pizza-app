const fetchOrderData = async () => {
    const res = await fetch("http://localhost:3000/api/orders");
    let data = await res.json();
    return data;
  };
  
  export default fetchOrderData
  