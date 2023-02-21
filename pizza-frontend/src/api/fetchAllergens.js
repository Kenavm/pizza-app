const fetchAllergensData = async () => {
    const res = await fetch("http://localhost:3000/api/allergens");
    let data = await res.json();
    return data;
  };
  
  const data = await fetchAllergensData();
  
  export default data;
  