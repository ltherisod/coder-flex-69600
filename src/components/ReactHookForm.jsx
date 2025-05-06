import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Button } from 'react-bootstrap'

const ReactHookForm = () => {
const[orderId, setOrderId]= useState('')
const [loading, setLoading]= useState(false)
const {register, handleSubmit, formState:{errors}, getValues}= useForm()
const {cart, cartTotal, clear}= useContext(CartContext)
// console.log(errors)
const finalizarCompra = (dataDelForm) =>{
    setLoading(true)
    let order ={
        comprador:{
            name:dataDelForm.name,
            lastname:dataDelForm.lastname,
            address:dataDelForm.address,
            email:dataDelForm.email,
        },
        compras:cart,
        total:cartTotal(),
        fecha:serverTimestamp()

    }

    const ventas = collection(db, "orders")
    addDoc(ventas, order)
    .then((res)=>{

        //OPCIONAL
        cart.forEach((item)=>{
            const docRef = doc(db, "productos", item.id)
            getDoc(docRef)
            .then((dbDoc)=>{
                updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
            })
            .catch((error)=> console.log(error))
        })
        setOrderId(res.id)
        clear()
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
}


  return (
    <div>
        {
            orderId ?
            <div>
                 <h2>Compra realizada!</h2>
                 <h4>Su id es: {orderId}</h4>
                <Link className='btn btn-dark' to='/'>Volver a Home</Link>
            </div>
            : <div>
                <h1>Complete con sus datos</h1>
                <form onSubmit={handleSubmit(finalizarCompra)}>
                    <input className='form-control' name='name' placeholder='Ingrese su nombre' type="text" {...register("name", {required:true, minLength:3})}/>
                    {errors?.name?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo Nombre</span>}
                    {errors?.name?.type === "minLength" && <span style={{color:'red'}}>El nombre debe contener minimo 3 caracteres</span>}
                    <input className='form-control' name='lastname' placeholder='Ingrese su apellido' type="text" {...register("lastname", {required:true, minLength:2})} />
                    {errors?.lastname?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo Apellido</span>}
                    {errors?.lastname?.type === "minLength" && <span style={{color:'red'}}>El apellido debe contener minimo 2 caracteres</span>}
                    <input className='form-control' name='address' placeholder='Ingrese su dirección' type="text" {...register("address", {required:true, minLength:10, maxLength:35})}/>
                    {errors?.address?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo su dirección</span>}
                    {errors?.address?.type === "minLength" && <span style={{color:'red'}}>La dirección debe contener minimo 10 caracteres</span>}
                    {errors?.address?.type === "maxLength" && <span style={{color:'red'}}>La dirección es demasiado larga</span>}
                    <input className='form-control' name='email' placeholder='Ingrese su correo' type="email"  {...register("email", {required:true})} />
                    {errors?.email?.type === "required" && <span style={{color:'red'}}>Por favor complete con su correo</span>}
                    <input className='form-control' name='second-email' placeholder='Repita su correo' type="email" {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})}/>
                    {errors?.secondemail?.type === "required" && <span style={{color:'red'}}>Por favor repita su correo</span>}
                    {errors?.secondemail?.type === "equalsMails" && <span style={{color:'red'}}>Los correos no coinciden</span> }
                    <Button
      variant="dark"
      disabled={loading}
      type='submit'
    >
      {loading ? 'Cargando…' : 'Finalizar compra'}
    </Button>
                </form>
            </div>
        }
    </div>
  )
}

export default ReactHookForm