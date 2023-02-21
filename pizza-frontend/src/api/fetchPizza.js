const fetchPizzaData = async (parameter) => {
  let baseUrl = "http://localhost:3000/api/pizzas"
  let url;
  console.log("parameter" + parameter)
  console.log("geladen");

  if (parameter.minPrice !== undefined && parameter.maxPrice !== undefined) {
    url = `${baseUrl}?min-price=${parameter.minPrice}&max-price=${parameter.maxPrice}`
  } else if (parameter.allergenToFilter !== "Avoid allergen") {
    url = baseUrl.concat(`?avoid-allergen-by-name=${parameter.allergenToFilter}`)
  } else if (parameter.name !== "") {
    url = baseUrl.concat(`?name=${parameter.name}`)
  //} else if (parameter.sortBy === /*whatever the condition will be*/) {
    //url.concat(`?sort-asc=${parameter.sortBy}`)
  //} else if (parameter.sortBy === /*whatever the condition will be*/) {
  //  url.concat(`&sort-desc=${parameter.sortBy}`)
  } else {
    url = baseUrl;
  }
  if (parameter.allergenToFilter !== "Avoid allergen") {
    url = url.concat(`&avoid-allergen-by-name=${parameter.allergenToFilter}`)
  }
  //if (parameter.name !== "") {
    //url = baseUrl.concat(`&name=${parameter.name}`)
  //}
  
  //console.log(url)
  //if (parameter.sortBy === /*whatever the condition will be*/) {
  //  url.concat(`&sort-asc=${parameter.sortBy}`)
  //}
  //if (parameter.sortBy === /*whatever the condition will be*/) {
  //  url.concat(`&sort-desc=${parameter.sortBy}`)
  //}

  const res = await fetch(url);
  let data = await res.json();
  //console.log("Data" + data);
  return data;
};

export default fetchPizzaData;
