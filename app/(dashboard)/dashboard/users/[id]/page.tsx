import { promises } from 'dns'
import React from 'react'

const page = async ({params}:{params : Promise<{id :string}>}) => {

const {id} = await params

  return (
    <div>showing details for user #{id}</div>
  )
}

export default page