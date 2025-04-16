import React, {useState} from 'react'

const Input = () => {
 const [name, setName] = useState('')
    const onChangeHandler = (e) => {
        console.log(e.target.value)
        // e.preventDefault()
        setName(e.target.value)
    }

    const noVowels = (e) => {
       if('aeiou'.includes(e.key.toLowerCase())){
        e.preventDefault()
        console.log('No vocales')
       }else{
        console.log(e.key)
       }
    }

    
  return (
    <div>
        <p>{name}</p>
        <input name='name' placeholder='Ingrese el nombre' onChange={onChangeHandler}/>
        <input  placeholder='No se aceptan vocales' onKeyDown={noVowels}/>
    </div>
  )
}

export default Input