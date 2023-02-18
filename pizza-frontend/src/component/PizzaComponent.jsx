export default function PizzaComponent({ props }) {
    return (
    <div class="pizza" id={props.id}>
        <div class="details">
            <h2 class="moreDetails">#{props.id}</h2>
            <h1>{props.name}</h1>
        </div>
        <div class="detailsList">
            <h2 class="moreDetails">Ingredients: </h2>
            <ul>
                {props.ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
            </ul>
        </div>
        <div class="detailsList">
            <h2 class="moreDetails">Allergens: </h2>
            <ul>
                {props.allergens.map((allergen) => (
                    <li>{allergen}</li>
                ))}
            </ul>
        </div>
        <div class="details">
            <h2 class="moreDetails">Price: </h2>
            <h2>{props.price}€</h2>
        </div>
        <div class="details">
          <button  class="addButton" id="addButton${id}">Add to order</button>
        </div>
    </div>
    )
}