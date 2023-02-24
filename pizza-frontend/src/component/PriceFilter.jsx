import "./PriceFilter.css";

function PriceFilter(props) {
  return (
    <div>
      <label className="price-label">Price</label>
      <div className="price-filters">
        <input
          type="text"
          className="min"
          placeholder="min"
          onChange={(e) => props.onSetMinPrice(e.target.value)}
        />
        <input
          type="text"
          className="max"
          placeholder="max"
          onChange={(e) => props.onSetMaxPrice(e.target.value)}
        />
      </div>
    </div>
  );
}

export default PriceFilter;
