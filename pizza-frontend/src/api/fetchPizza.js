const fetchPizzaData = async (parameters) => {
  let baseUrl = "http://localhost:3000/api/pizzas"
  let url;

  if (parameters.minPrice !== undefined || parameters.maxPrice !== undefined) {
    url = `${baseUrl}?min-price=${parameters.minPrice}&max-price=${parameters.maxPrice}`
  } else if (parameters.allergen !== undefined) {
    url = baseUrl+`?avoid-allergen-by-name=${parameters.allergen.name}`
  } else if (parameters.pizzaName !== undefined) {
    url = baseUrl+`?name=${parameters.pizzaName}`
  //} else if (parameter.sortBy === /*whatever the condition will be*/) {
    //url+`?sort-asc=${parameter.sortBy}`
  //} else if (parameter.sortBy === /*whatever the condition will be*/) {
  //  url+`&sort-desc=${parameter.sortBy}`
  } else {
    url = baseUrl;
  }
 
  //if (parameter.pizzaName !== "") {
    //url = baseUrl+`&name=${parameter.pizzaName}`
  //}
  
  //console.log(url)
  //if (parameter.sortBy === /*whatever the condition will be*/) {
  //  url+`&sort-asc=${parameter.sortBy}`
  //}
  //if (parameter.sortBy === /*whatever the condition will be*/) {
  //  url+`&sort-desc=${parameter.sortBy}`
  //}

  console.log(url)
  const res = await fetch(url);
  let data = await res.json();
 
  return data;
};

export default fetchPizzaData;
