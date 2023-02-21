import "./PizzaComponent.css";

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
        <button className="add-button">Add to cart</button>
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
