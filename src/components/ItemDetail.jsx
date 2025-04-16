import React, { useState } from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({productDetail}) => {
   
console.log('itemDetail')
  const onAdd = (cantidad)=> {
    console.log(`Agregaste ${cantidad} de productos al carrito`)
  }

  return (
    <div>
        <h2>Detalle de: {productDetail.name}</h2>
        <img src={productDetail.img} alt={productDetail.name}/>
        <p>{productDetail.description}</p>
        <p>Precio: ${productDetail.price},00</p>
        <p>Stock: {productDetail.stock}</p>
        <ItemCount stock={productDetail.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail