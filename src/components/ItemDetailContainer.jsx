import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail]= useState({})
  const [loading, setLoading]= useState(false)
  const {itemId}= useParams()
  console.log(itemId)
  useEffect(()=>{
    setLoading(true)
    getOneProduct(itemId)
    .then((res)=> setProductDetail(res))
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[itemId])
  
  return (
    <div>
       {loading ? <LoaderComponent/> : <ItemDetail productDetail={productDetail}/>}
       
    </div>
  )
}

export default ItemDetailContainer