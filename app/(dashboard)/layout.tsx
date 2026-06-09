import React from 'react'

const layout = ({children} : {children :React.ReactNode}) => {
  return (
    <div>
            dashboard navbar 
            {children}
    </div>
  )
}

export default layout