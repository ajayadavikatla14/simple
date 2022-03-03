import React, { useState } from 'react'
import Data from './Data'

const ApiAccess = () => {
    const [data,setData]=useState([]);
    console.log(data);
  return (
    <>
        { data.map((item,index)=>{
            return(
                <div key={index}><p>{item.name}</p></div>
            )
        }) }
    </>
  )
}

export default ApiAccess