import {getProducts} from '../mock/asyncService'
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
const ItemListContainer = ({greeting}) => {
  const [data, setData]= useState([])
  const [loader, setLoader] =  useState(false)
  const {categoryId}= useParams()
  console.log(categoryId)


    useEffect(()=>{
      setLoader(true)
      getProducts()
      .then((res)=>{
        if(categoryId){
          //filtro
          setData(res.filter((prod)=> prod.category === categoryId ))
        }else{
          setData(res)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoader(false))
    },[categoryId])
   
    return(
        <div>
          {
            loader ? <h1>Cargando..</h1>
            :<div>
            <h1>{greeting} {categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
           <ItemList data={data}/>
          </div>
          }
        </div>
    )
}

export default ItemListContainer