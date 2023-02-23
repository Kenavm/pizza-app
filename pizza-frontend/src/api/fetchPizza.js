const fetchPizzaData = async (parameters) => {
  let baseUrl = "http://localhost:3000/api/pizzas";
  let url;
  console.log("allergen" + parameters.allergen);
  console.log("maxPrice" + parameters.maxPrice);
  console.log("pizzaName" +parameters.pizzaName);
  if (
    parameters.minPrice !== undefined &&
    parameters.maxPrice !== undefined &&
    parameters.minPrice !== "" &&
    parameters.maxPrice !== ""
  ) {
    console.log("test");

    url = `${baseUrl}?min-price=${parameters.minPrice}&max-price=${parameters.maxPrice}`;
  } else if (parameters.allergen !== undefined) {
    console.log("allergen name");
    url = baseUrl + `?avoid-allergen-by-name=${parameters.allergen.name}`;
  } else if (parameters.pizzaName !== undefined) {
    console.log("test name");
    url = baseUrl + `?name=${parameters.pizzaName}`;
  } else if (parameters.sortBy === "Sort by name ascending") {
    url = baseUrl+`?sort-asc=name`
  } else if (parameters.sortBy === "Sort by name descending") {
    url = baseUrl+`?sort-desc=name`
  } else if (parameters.sortBy === "Sort by price ascending") {
    url = baseUrl+`?sort-asc=price`
  } else if (parameters.sortBy === "Sort by price descending") {
    url = baseUrl+`?sort-desc=price`
  } else {
    url = baseUrl;
  }

  if (parameters.pizzaName !== "" && parameters.pizzaName !== undefined) {
    url = url+`&name=${parameters.pizzaName}`
  }

  if (parameters.allergen !== undefined) {
    url = url.concat(`&avoid-allergen-by-name=${parameters.allergen.name}`)
  }

  if (parameters.sortBy === "Sort by name ascending" && !url.includes("?sort")) {
    url = url+`&sort-asc=name`
  }
  
  if (parameters.sortBy === "Sort by name descending" && !url.includes("?sort")) {
    url = url+`&sort-desc=name`
  } 
  
  if (parameters.sortBy === "Sort by price ascending" && !url.includes("?sort")) {
    url = url+`&sort-asc=price`
  }
  
  if (parameters.sortBy === "Sort by price descending" && !url.includes("?sort")) {
    url = url+`&sort-desc=price`
  }

  console.log("URL"+url);
  const res = await fetch(url);
  let data = await res.json();

  return data;
};

export default fetchPizzaData;
