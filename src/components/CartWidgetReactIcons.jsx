import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartWidgetReactIcons = () => {
    const {cart}= useContext(CartContext)
    console.log(cart)
    return(
        <div>
            <BsCart4 fontSize={'1.5em'}/>
            <Badge bg="danger">
       {/* {cart.length} */}
      </Badge>
        </div>
    )
}

export default CartWidgetReactIcons