const fetchPizzaData = async (parameter) => {
  let baseUrl = "http://localhost:3000/api/pizzas"
  let url;

  if (parameter.minPrice !== undefined && parameter.maxPrice !== undefined) {
    url = `${baseUrl}?min-price=${parameter.minPrice}&max-price=${parameter.maxPrice}`
  } else if (parameter.allergenToFilter !== "Avoid allergen") {
    url = baseUrl+`?avoid-allergen-by-name=${parameter.allergenToFilter}`
  } else if (parameter.name !== "") {
    url = baseUrl+`?name=${parameter.name}`
  //} else if (parameter.sortBy === /*whatever the condition will be*/) {
    //url+`?sort-asc=${parameter.sortBy}`
  //} else if (parameter.sortBy === /*whatever the condition will be*/) {
  //  url+`&sort-desc=${parameter.sortBy}`
  } else {
    url = baseUrl;
  }
  if (parameter.allergenToFilter !== "Avoid allergen") {
    url = url+`&avoid-allergen-by-name=${parameter.allergenToFilter}`
  }
  //if (parameter.name !== "") {
    //url = baseUrl+`&name=${parameter.name}`
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
  //console.log("Data" + data);
  return data;
};

export default fetchPizzaData;
