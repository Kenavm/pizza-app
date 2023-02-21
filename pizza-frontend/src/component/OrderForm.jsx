import { useState } from "react"
import OrderButton from "./OrderButton"
import "./OrderForm.css"

export default function OrderForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const {city, setCity} = useState("")
    return (
        <div className="order-form">
            <input placeholder="name" value={name} onChange={(event) => setName(event.target.value)}></input> <br/>
            <input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}></input> <br/>
            <input placeholder="street" value={street} onChange={(event) => setStreet(event.target.value)}></input><br/>
            <input placeholder="city" value={city} onChange={(event) => setCity(event.target.value)}></input>
            <OrderButton/>
        </div>
    )
}