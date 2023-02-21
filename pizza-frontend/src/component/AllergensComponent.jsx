export default function AllergensComponent(props) {
    return (
      <form>
        {props.allergens.map((allergen) => (
          <><input
            type="checkbox"
            key={allergen.letter}
            name={allergen.name}
            value={allergen.name} />
            <label for={allergen.name}>{allergen.name}</label><br/></>
        ))}
      </form>
    );
  }
  