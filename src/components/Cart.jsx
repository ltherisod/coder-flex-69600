import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import CartView from './CartView'

const Cart = () => {
    const {cart}= useContext(CartContext)
  return (
    <div>{
        cart.length 
        ? <CartView/>
        : <EmptyCart/>
    }</div>
  )
}

export default Cart