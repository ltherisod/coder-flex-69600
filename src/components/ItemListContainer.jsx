import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
    console.log('ItemListContainer')
    // const {nombrecito, apellido, mayor} =props

    //Promise
    const getData = () => {
      let error= true
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          if(error){
            reject('No hay pizza')
          }else{
            resolve('Hay pizza, llega en 2 segs')
          }
        },2000)
      })
    }

    console.log(getData())

    return(
        <div>
          <h1>{greeting}</h1>
          <ItemCount stock={5}/>
          {/* <ItemCount stock={15}/> */}
        </div>
    )
}

export default ItemListContainer