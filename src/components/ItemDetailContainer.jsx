import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncService'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail]= useState({})
  const [invalid, setInvalid]= useState(null)
  const [loading, setLoading]= useState(false)
  const {itemId}= useParams()
  console.log(itemId)
  //Firebase
  useEffect(()=>{
    setLoading(true)
    //conectar con nuestra collection
    const productCollection = collection(db, "productos")
    //crea la ref del doc
    const docRef= doc(productCollection, itemId )

    //forma corta
    //const docRef = doc(db, "productos", id)

    getDoc(docRef)
    .then((res)=>{
      if(res.data()){
        setProductDetail({id: res.id, ...res.data()})
      }else{
        setInvalid(true)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[])

  //Promesa
  // useEffect(()=>{
  //   setLoading(true)
  //   getOneProduct(itemId)
  //   .then((res)=> setProductDetail(res))
  //   .catch((error)=> console.log(error))
  //   .finally(()=> setLoading(false))
  // },[itemId])

  if(invalid){
    return <div>
      <h2>Lo siento ese producto no existe! 😱</h2>
      <Link className='btn btn-dark' to='/'>Volver a home</Link>
    </div>
  }
  
  return (
    <div>
       {loading ? <LoaderComponent/> : <ItemDetail productDetail={productDetail}/>}
       
    </div>
  )
}

export default ItemDetailContainer