import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncService'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail]= useState({})

  useEffect(()=>{
    getOneProduct('03')
    .then((res)=> setProductDetail(res))
    .catch((error)=> console.log(error))
  },[])
  
  return (
    <div>
        <ItemDetail productDetail={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer