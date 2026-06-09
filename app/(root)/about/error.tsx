
'use client' ;

import { useEffect } from 'react'




const error = ({error , reset } : {error : Error & {digest ? : string} , reset : ()=> void }) => {
    useEffect(()=>{
        console.error(error);
    },[error])
  return (
    <div>
        
        <h1>somethiong went wrong </h1>
        <button onClick = {()=> reset()}>try again </button>
    </div>
  )
}

export default error