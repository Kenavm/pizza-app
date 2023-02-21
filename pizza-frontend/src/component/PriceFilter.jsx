import { useState } from "react";
import "./PriceFilter.css";

function PriceFilter(props) {

    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    function handleInput(event) {
        if(event.target.className === "min") {
            setMin(event.target.value)
        } else {
            setMax(event.target.value)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onFilterByPrice(min, max);
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="price-filters">
        <div className="price-label">Price</div>
        <input type="text" className="min" placeholder="min" onChange={(e) => handleInput(e)}/>
        <input type="text" className="max" placeholder="max" onChange={(e) => handleInput(e)}/>
        <button className="filter-button">Filter</button>
      </div>
    </form>
  );
}

export default PriceFilter;
