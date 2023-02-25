import "./Cart.css";

import ButtonComponent from "./ButtonComponent";

export default function Cart(props) {
	return (
		<div>
			{props.cartContents.map((pizza) => {
				return (
					<div id={pizza.id}>
						<table>
							<tr>
								<td>
									<b>Name:</b>
								</td>
								<td>{pizza.name}</td>
							</tr>
							<tr>
								<td>
									<b>Price:</b>{" "}
								</td>
								<td>{pizza.price}€</td>
							</tr>
							<tr>
								<td>
									<b>Amount: </b>
								</td>
								<td>{pizza.amount}x</td>
							</tr>
						</table>

						<ButtonComponent
							buttonClassName={"filter-button"}
							buttonName={"Delete"}
							onClick={() => props.onDelete(pizza.id)}
						></ButtonComponent>
					</div>
				);
			})}
			<p className="total">{"Total: " + props.total} €</p>
		</div>
	);
}
