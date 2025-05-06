import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const {cart, removeItem, clear, cartTotal}= useContext(CartContext)
        const preConfirmation = () =>{
            Swal.fire({
                title:'¿Estas seguro que queres borrar todo el carrito?',
                showDenyButton:true,
                denyButtonText:'No',
                confirmButtonText:'Si'
            }).then((result)=>{
                if(result.isConfirmed){
                    clear()
                }else if(result.isDenied){

                }
            })
        }
  return (
    <div>
        <h1>Tu Carrito</h1>
        <div>
            {cart.map((compra)=>(
                //si quieren hacen el componente CartItem
                // <CartItem key={compra.id} compra={compra}/>
                <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                    <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
                    <span>{compra.name}</span>
                    <span>{compra.quantity}</span>
                    <span>${compra.price},00</span>
                    <span>precio final:$ {compra.quantity * compra.price},00</span>
                    <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
                </div>
            ))}
        </div>
        {/* llaman la funcion total */}
        <span>Total a pagar: ${cartTotal()}</span>
        <button className='btn btn-danger' onClick={preConfirmation}>Borrar todo el carrito</button>
        <Link to='/checkout'>Terminar compra</Link>
    </div>
  )
}

export default CartView