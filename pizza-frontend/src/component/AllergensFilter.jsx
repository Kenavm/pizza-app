import { useState } from "react";
import "./AllergensFilter.css";
import Button from './ButtonComponent'

export default function AllergensFilter(props) {
  const [allergenToFilter, setAllergenToFilter] = useState("");

  function handleInput(event) {
    setAllergenToFilter(event.target.value);
  }

  function handleSubmitAllergens(event) {
    event.preventDefault();
    props.filterByAllergen(allergenToFilter);
  }

  return (
    <form onSubmit={handleSubmitAllergens}>
      <div>
        <div className="allergen-label">Avoid Allergen</div>
        <select
          className="allergen-filters"
          onChange={(event) => handleInput(event)}
        >
          {props.allergens.map((allergen) => (
            <option value={allergen.name} key={allergen.name}>{allergen.name}</option>
          ))}
        </select>
        <Button buttonClassName={"filter-button"} buttonName={"Filter"} />
      </div>
    </form>
  );
}

// or for multiple allergens
/*export default function AllergensComponent(props) {
    return (
      <div className="allergens-filters">
        <div>Avoid Allergens</div>
        <form>
          {props.allergens.map((allergen) => (
            <>
              <input
                type="checkbox"
                key={allergen.letter}
                name={allergen.name}
                value={allergen.name}
              />
              <label for={allergen.name}>
                {allergen.name} ({allergen.letter})
              </label>
              <br />
            </>
          ))}
        </form>
      </div>
    );
  }
*/

