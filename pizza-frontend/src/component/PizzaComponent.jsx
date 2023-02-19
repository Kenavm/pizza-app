export default function PizzaComponent( props ) {
    return (
    <div className="pizza" key={props.id}>
        <div className="details">
            <h2 className="moreDetails">#{props.id}</h2>
            <h1>{props.name}</h1>
        </div>
        <div className="detailsList">
            <h2 className="moreDetails">Ingredients: </h2>
            <ul>
                {props.ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
            </ul>
        </div>
        <div className="detailsList">
            <h2 className="moreDetails">Allergens: </h2>
            <ul>
                {props.allergens.map((allergen) => (
                    <li>{allergen}</li>
                ))}
            </ul>
        </div>
        <div className="details">
            <h2 className="moreDetails">Price: </h2>
            <h2>{props.price}€</h2>
        </div>
        <div className="details">
          <button  className="addButton" id="addButton${id}">Add to order</button>
        </div>
    </div>
    )
}