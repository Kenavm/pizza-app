const fetchPizzaData = async (parameter) => {
  let url = "http://localhost:3000/api/pizzas"

  if (parameter.minPrice !== "" && parameter.maxPrice !== "") {
    url.concat(`?min-price=${parameter.minPrice}&max-price=${parameter.maxPrice}`)
  } else if (parameter.allergenToFilter !== "Avoid allergen") {
    url.concat(`?avoid-allergen-by-name=${parameter.allergenToFilter}`)
  } else if (parameter.name !== "") {
    url.concat(`?name=${parameter.name}`)
  //} else if (parameter.sortBy === /*whatever the condition will be*/) {
    //url.concat(`?sort-asc=${parameter.sortBy}`)
  //} else if (parameter.sortBy === /*whatever the condition will be*/) {
  //  url.concat(`&sort-desc=${parameter.sortBy}`)
  } else {
    return url;
  }
  if (parameter.allergenToFilter !== "Avoid allergen") {
    url.concat(`&avoid-allergen-by-name=${parameter.allergenToFilter}`)
  }
  if (parameter.name !== "") {
    url.concat(`&name=${parameter.name}`)
  }
  
  console.log(url)
  //if (parameter.sortBy === /*whatever the condition will be*/) {
  //  url.concat(`&sort-asc=${parameter.sortBy}`)
  //}
  //if (parameter.sortBy === /*whatever the condition will be*/) {
  //  url.concat(`&sort-desc=${parameter.sortBy}`)
  //}

  const res = await fetch(url);
  let data = await res.json();
  return data;
};

export default fetchPizzaData;
