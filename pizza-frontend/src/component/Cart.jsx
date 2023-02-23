export default function Cart(props) {
    return (
        <div>
            {props.cartContents.map((pizza)=>{
               return( <div>
                <p>Name: {pizza.name}</p>
                <p>Price: {pizza.price}</p>
                <p>Amount: {pizza.amount}</p>
                </div>
               )
            })}
            <p>Total: {props.total}</p>
        </div>
    )
}