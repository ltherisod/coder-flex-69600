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
        //sumar cantidades
        console.log('ya existe en el carrito')
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


//funcion de total a pagar(cartView//checkout)


    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}