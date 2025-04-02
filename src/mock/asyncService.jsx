const products = [
    {
        id:'01',
        name:'Random 01',
        price:1000,
        description:'lorem lorem lorem',
        stock:15,
        category:'nuevos',
        img:'../logo.png'
    },
    {
        id:'02',
        name:'Random 02',
        price:3000,
        description:'lorem lorem lorem',
        stock:5,
        category:'ofertas',
        img:'https://picsum.photos/200'
    },
    {
        id:'03',
        name:'Random 03',
        price:3800,
        description:'lorem lorem lorem',
        stock:25,
        category:'mas vendidos',
        img:'https://picsum.photos/204'
    },
    {
        id:'04',
        name:'Random 04',
        price:8000,
        description:'lorem lorem lorem',
        stock:5,
        category:'nuevos',
        img:'https://picsum.photos/206'
    }

]

//Promesa

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
