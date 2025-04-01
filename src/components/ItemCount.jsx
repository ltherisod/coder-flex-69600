import React, {useState, useEffect, use} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount]=useState(1)
    const [compra, setCompra] = useState(false)
const add = () => {
    if(count < stock){
        setCount( count + 1 )
    }
}

const substract = () => {
    if(count > 0){
        setCount(count - 1)
    }
}

const comprar = () => {
    setCompra(!compra)
}

//se va a ejeturar siempre NO ES RECOMENDABLE
// useEffect(()=>{
// console.log('me ejecuto siempreee')
// })

//se va a ejecutar cuando monta el componente (1 sola vez)
useEffect(()=>{
    console.log('me ejecuto una sola vez')
} ,[])


//a la escucha de un cambio en particular
useEffect(()=> {
    console.log('me ejecuto una sola vez y cada vez que cambie compra')
}, [compra])


  return (
    <div>
        <div>
        <button className='btn btn-danger' onClick={substract}>-</button>
        <span className='btn'>{count}</span>
        <button onClick={add} className='btn btn-success'>+</button>
    </div>
    <button className='btn btn-primary' onClick={comprar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount