import "./AllergensFilter.css";

export default function AllergensFilter(props) {

  return (
    <div>
      <div className="allergen-label">Avoid Allergen</div>
      <select
        className="allergen-filters"
        onChange={(e) => props.isSetAllergen(e.target.value)}
      >
        <option value={""} key={""} />
        {props.allergenData.map((allergen) => (
          <option value={allergen.name} key={allergen.name}>
            {allergen.name}
          </option>
        ))}
      </select>
    </div>
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
