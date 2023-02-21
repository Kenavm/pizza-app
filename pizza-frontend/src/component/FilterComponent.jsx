import NameFilter from "./NameFilter";
import PriceFilter from "./PriceFilter";
import AllergensFilter from "./AllergensFilter";

function FilterComponent() {
  return (
    <div>
        <form onChange={handleSubmit}>
      <NameFilter onNameFilter={filterByName} />
      <PriceFilter onFilterByPrice={filterByPrice} />
      <AllergensFilter
        allergens={allergenData}
        onFilterByAllergen={filterByAllergen}
      />
      </form>
    </div>
  );
}

export default FilterComponent;
