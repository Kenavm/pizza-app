export default function AllergensComponent( props ) {
    return (
        <form>
        { props.allergens.map((allergen) => {(
        <input type="checkbox" key={allergen.letter} name={allergen.name} value={allergen.name}/>
        )})
        }
        </form>
    )
}