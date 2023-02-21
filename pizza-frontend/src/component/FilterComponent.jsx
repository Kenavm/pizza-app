import NameFilter from "./NameFilter";
import PriceFilter from "./PriceFilter";
import AllergensFilter from "./AllergensFilter";
import Button from "./ButtonComponent";
function FilterComponent(props) {
  return (
    <div>
      <form >
        <NameFilter  />
        <PriceFilter  />
        <AllergensFilter
        allergens = {props.allergens}
         
        />
        <Button className={"filter-button"} buttonName={"Filter"}/>
      </form>
    </div>
  );
}

export default FilterComponent;
