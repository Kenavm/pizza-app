const fetchPizzaData = async () => {
  const res = await fetch("http://localhost:3000/api/pizzas");
  let data = await res.json();
  return data;
};

export default fetchPizzaData;
