import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
const CartWidgetReactIcons = () => {
    return(
        <div>
            <BsCart4 fontSize={'1.5em'}/>
            <Badge bg="danger">
        15
      </Badge>
        </div>
    )
}

export default CartWidgetReactIcons