import ItemCount from "./ItemCount"
import {getProducts} from '../mock/asyncService'
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
const ItemListContainer = ({greeting}) => {
  const [data, setData]= useState([])
    console.log('ItemListContainer')
  
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