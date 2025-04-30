 export const products = [
    {
       
        name:'Random 02',
        price:3000,
        description:'lorem lorem lorem',
        stock:5,
        category:'ofertas',
        img:'https://picsum.photos/200'
    },
    {
       
        name:'Random 03',
        price:3800,
        description:'lorem lorem lorem',
        stock:25,
        category:'mas vendidos',
        img:'https://picsum.photos/204'
    },
    {
       
        name:'Random 04',
        price:8000,
        description:'lorem lorem lorem',
        stock:5,
        category:'nuevos',
        img:'https://picsum.photos/206'
    }

]

//Promesa
//devuelve todos los productos
export const getProducts = () => {
    return new Promise((resolve, reject)=>{
        let error= false
        setTimeout(()=>{
            if(error){
                reject('No hay data ')
            }else{
                resolve(products)
            }
        },3000)
    })
}

//devuelva 1 solo producto

export const getOneProduct = (id)=>{
    return new Promise((resolve)=>{
        let productFound= products.find((prod)=> prod.id === id)
        setTimeout(()=>{
            // resolve(products[0])
            resolve(productFound)
        },1500)
    })
}
