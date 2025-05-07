import { createContext, useState } from "react";


//Creamos un contexto
export const CartContext = createContext({})


export const CartProvider = ({children}) => {
 const [cart, setCart] = useState([])

//funciones que modifiquen el carrito

//agregar un item al carrito
const addToCart = (item,cantidad)=> {
    //evaluar si el item ya esta en el carrito

    if(isInCart(item.id)){
        //hacer la logica de sumar cantidades
        const updatedCart = cart.map((prod)=>{
            if(prod.id === item.id){
                //sumar cantidades
                return {...prod, quantity: prod.quantity + cantidad}
            }else{
                return prod
            }
        })
        //actualizar el estado con el nuevo array
        setCart(updatedCart)
    }else{

        //sumar un nuevo item al carrito
        setCart([...cart, {...item, quantity:cantidad}])
    }
}


//Borrar todo el carrito
const clear = () =>{
    setCart([])
}

//eliminar un item del carrito
const removeItem = (id) => {
setCart(cart.filter((prod)=> prod.id !== id))
}

//si esta en carrito
const isInCart = (id) => {
    return cart.some((prod)=> prod.id === id)
}


//funcion total de productos(cartWidget)
    const cartQuantity = () => {
        return cart.reduce((acc, prod)=> acc+= prod.quantity,0)
    }

//funcion de total a pagar(cartView//checkout)
const cartTotal = () => {
    return cart.reduce((acc, prod)=> acc += prod.price * prod.quantity, 0)
}

//PLUS
//DESCONTAR EL STOCK LOCAL
const itemQuantity = (id) => {
    const itemInCart = cart.find((prod)=> prod.id === id)
    if(itemInCart){
        //devuelva la cantidad de ese item en el carrito
        return itemInCart.quantity
    }else{
        //no existe en el carrito
        return 0
    }
}

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartTotal, cartQuantity, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}