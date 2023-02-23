const fetchAllergensData = async () => {
    const res = await fetch("http://localhost:3000/api/allergens");
    let data = await res.json();
    console.log(data)
    return data;
  };
  
  export default fetchAllergensData;
  