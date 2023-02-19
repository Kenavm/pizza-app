async function fetchPriceFilter(min, max) {
    const url = `http://localhost:3000/api/pizzas?min-price=${min}&max-price=${max}`;
    let res = await fetch(url);
    let filteredData = await res.json();
    console.log(filteredData)
    return filteredData;
}

export default fetchPriceFilter