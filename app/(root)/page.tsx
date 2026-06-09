import React from 'react'
import Hello from '../../components/Hello'



const page = () => {
  console.log("i am a server component")
  return (
    <main>
    <div className='font-bold'>this is now our home page </div>
    <Hello />
    </main>
  )
}

export default page