import React, { Component } from 'react'

import {
   useParams 
} from "react-router-dom"

function Verify(){
  // router.get('/verify/:id', async(req,res) => {

  // })
        

  // const [queryParameters] = useSearchParams()
  const {token} = useParams();
  return (
      <div>
      
     {/* Name: {queryParameters.get("name")} */}
      {/* console.log("name") */}
      <p>Token:{token}</p>
    </div>
  )
}
export default Verify
