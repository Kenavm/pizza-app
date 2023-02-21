async function fetchDataFilteredByAllergen({allergenToFilter}) {
    const url = `http://localhost:3000/api/pizzas?avoid-allergen-by-name=${allergenToFilter}`;
    let res = await fetch(url);
    let filteredData = await res.json();
    return filteredData;
}

export default fetchDataFilteredByAllergen