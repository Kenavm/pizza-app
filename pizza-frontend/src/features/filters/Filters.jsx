import NameFilter from "../../component/NameFilter";
import PriceFilter from "../../component/PriceFilter";
import AllergensFilter from "../../component/AllergensFilter";
import Button from "../../component/ButtonComponent";
import './Filters.css'

function Filters(props) {
  return (
    <div className="filter-container">
      <NameFilter isSetName={props.isSetName} />

      <PriceFilter
        isSetMinPrice={props.isSetMinPrice}
        isSetMaxPrice={props.isSetMaxPrice}
      />
      <AllergensFilter
        isSetAllergen={props.isSetAllergen}
        allergenData={props.allergenData}
      />
      <Button
        onClick={() => props.isFilterPizzas()}
        buttonClassName={"filter-button"}
        buttonName={"Filter"}
      />
    </div>
  );
}

export default Filters;
