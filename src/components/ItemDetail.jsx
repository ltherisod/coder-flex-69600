import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({productDetail}) => {
  return (
    <div>
        <h2>Detalle de: {productDetail.name}</h2>
        <img src={productDetail.img} alt={productDetail.name}/>
        <p>{productDetail.description}</p>
        <p>Precio: ${productDetail.price},00</p>
        <p>Stock: {productDetail.stock}</p>
        <ItemCount stock={productDetail.stock}/>
    </div>
  )
}

export default ItemDetail