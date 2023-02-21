import NameFilter from "./NameFilter";
import PriceFilter from "./PriceFilter";
import AllergensFilter from "./AllergensFilter";
import Button from "./ButtonComponent";
function FilterComponent() {
  return (
    <div>
      <form >
        <NameFilter  />
        <PriceFilter  />
        <AllergensFilter
      
         
        />
        <Button className={"filter-button"} buttonName={"Filter"}/>
      </form>
    </div>
  );
}

export default FilterComponent;
