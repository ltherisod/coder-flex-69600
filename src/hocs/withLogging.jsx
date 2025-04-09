import { useEffect } from "react";

export function withLogging(WrappedComponent){
    function ComponentWithLogging(props){
        useEffect(()=>{
            console.log(`Componente ${WrappedComponent.name} montado`)
        },[])
        return <WrappedComponent {...props}/>

    }
    return ComponentWithLogging
}