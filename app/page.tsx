
'use client'

import { useState } from "react";

const page = () => {
    const [data , setData] = useState(null)
    const [ loading , setLoading ] = useState(false);

    const handleclick = async() =>{
        setLoading(true);
let a = await fetch("/api/add" , {
    method : 'GET' , headers:{
        "content-type" : "application/json", 
    },
})
let res  = await a.json();
setData(res.message);
setLoading(false);
    }
  return (
    <div>
        <h1>this is a net app</h1>
        <button onClick={handleclick}  > click me </button>
        
        {/* {loading ? <p>Loading...</p> : <p>{data}</p>}
         */}

         {loading && (
            <>
         <div>Loading...</div>
         {data && (
            <div>{data}</div>
         )}
         </>
         )
         }

    </div>
  )
}

export default page