export default function Cart(props) {
    function test() {
        console.log()
    }
    test()
    return (
        <div>
            {props.cartContents[0].name}
        </div>
    )
}