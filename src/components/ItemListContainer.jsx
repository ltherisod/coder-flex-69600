import ItemCount from "./ItemCount"
import {getProducts} from '../mock/asyncService'
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
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
    console.log(data)
    return(
        <div>
          <h1>{greeting}</h1>
         <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer