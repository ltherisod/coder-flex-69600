import ItemCount from "./ItemCount"
import {getProducts} from '../mock/asyncService'
import { useEffect, useState } from "react"
const ItemListContainer = ({greeting}) => {
  const [data, setData]= useState([])
    console.log('ItemListContainer')
    // const {nombrecito, apellido, mayor} =props

    //Promise
    // const getData = () => {
    //   let error= false
    //   return new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //       if(error){
    //         reject('No hay pizza')
    //       }else{
    //         resolve('Hay pizza, llega en 2 segs')
    //       }
    //     },2000)
    //   })
    // }
    // console.log(getData())
// console.log(getProducts(), 'sin el then')
    useEffect(()=>{
      getProducts()
      .then((res)=> setData(res))
      .catch((error)=> console.log(error))
    },[])

    return(
        <div>
          <h1>{greeting}</h1>
          {data.map((producto)=> <p key={producto.id}>{producto.name}</p>)}
        </div>
    )
}

export default ItemListContainer