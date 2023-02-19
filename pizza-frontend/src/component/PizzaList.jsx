import PizzaComponent from "./PizzaComponent";

function PizzaList(props) {
  return (
    <div className="pizzaList">
      {props.pizzas.map((pizza) => {
        return (
          <PizzaComponent
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            ingredients={pizza.ingredients}
            allergens={pizza.allergens}
            price={pizza.price}
          />
        );
      })}
    </div>
  );
}

export default PizzaList;
