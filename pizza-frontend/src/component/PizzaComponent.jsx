import "./PizzaComponent.css";
import Button from './ButtonComponent'

export default function PizzaComponent(props) {

  return (
    <div className="pizza" key={props.id}>
      <div className="pizza-content">
        <p className="title">{props.name}</p>
        
        <div className="ingredients-list">
          {props.ingredients.map((ingredient) => {
            return <p className="ingredient" key={ingredient}>{ingredient}, </p>;
          })}
        </div>
        <div>
          {" "}
          <p className="price">{`From ${props.price} €`} </p>{" "}
        </div>
        <Button onClick={()=> props.handleAddToCart(props.name, props.price, props.id)} buttonClassName={"add-to-cart-button"} buttonName={"Add to cart"}/>
      </div>
      <div className="image-container">
      <img
          className="pizza-image"
          src={`../src/assets/images/${props.name.replace(/\s/g, "")}.jpg`}
        />
      </div>
    </div>
  );
}
