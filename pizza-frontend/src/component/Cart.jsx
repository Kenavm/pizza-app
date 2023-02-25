import "./Cart.css";

export default function Cart(props) {
	return (
		<div>
			{props.cartContents.map((pizza) => {
				return (
					<div id={pizza.id}>
						<p>Name: {pizza.name}</p>
						<p>Price: {pizza.price}€</p>
						<p>Amount: {pizza.amount}x</p>
						<button onClick={() => props.onDelete(pizza.id)}>Delete</button>
					</div>
				);
			})}
			<p className="total">{"Total: " + props.total} €</p>
		</div>
	);
}
