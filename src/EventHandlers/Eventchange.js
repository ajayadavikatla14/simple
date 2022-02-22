import React, { useState } from 'react'

const Eventchange = () => {
    const [name,setName]=useState('');
  return (
    <>
        <h2>name: { name }</h2>
        <input type="text" placeholder='Enter Something.' onChange={ (e)=>setName(e.target.value) } />
    </>
  )
}

export default Eventchange