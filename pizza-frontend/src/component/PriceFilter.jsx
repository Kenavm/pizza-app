import { useState } from "react";
import "./PriceFilter.css";
import Button from "./ButtonComponent";
function PriceFilter(props) {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  function handleInput(event) {
    if (event.target.className === "min") {
      setMin(event.target.value);
    } else {
      setMax(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onFilterByPrice(min, max);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="price-label">Price</label>
      <div className="price-filters">
        <input
          type="text"
          className="min"
          placeholder="min"
          onChange={(e) => handleInput(e)}
        />
        <input
          type="text"
          className="max"
          placeholder="max"
          onChange={(e) => handleInput(e)}
        />
        <Button buttonClassName={"filter-button"} buttonName={"Filter"} />
      </div>
    </form>
  );
}

export default PriceFilter;
