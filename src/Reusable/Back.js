import React, { useState } from 'react'
import FrontPart from './FrontPart';

const Back = () => {
  const arr=[
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
  ]

  return (
    <>
        <div>
        {arr.map((item,index)=>{
          return (
          <FrontPart key={index} src={item}/>
          )
        })}
        </div>
    </>
  )
}

export default Back