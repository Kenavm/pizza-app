import "./PizzaComponent.css";
import Button from './ButtonComponent'

export default function PizzaComponent(props) {
  function add(){
    console.log("test")
    props.handleAddToCart(props.name, props.price)
    console.log(props.name)
  }
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
        <Button buttonClassName={"add-to-cart-button"} buttonName={"Add to cart"} onClick={()=>add()}/>
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
