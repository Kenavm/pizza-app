function PizzaList(props) {
    <div className="pizzaList">
        props.pizzas.maps(pizza => {
            <Pizza pizzaId: {props.pizzaId} pizzaName: {props.pizzaName} pizzaAllergens: {props.ingredients} pizzaPrice: {props.pizzaPrice}/>
        })
        
    </div>
}

export default PizzaList