import React from 'react'
import Hoc from './Hoc'

const Frontfile = (props) => {
  return (
    <>
        <h1>welcome user :{props.name}</h1>
    </>
  )
}

export default Hoc(Frontfile)