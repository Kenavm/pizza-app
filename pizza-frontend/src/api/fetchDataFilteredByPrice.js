async function fetchDataFilteredByPrice({minPrice, maxPrice}) {
    const url = `http://localhost:3000/api/pizzas?min-price=${minPrice}&max-price=${maxPrice}`;
    let res = await fetch(url);
    let filteredData = await res.json();
    return filteredData;
}

export default fetchDataFilteredByPrice