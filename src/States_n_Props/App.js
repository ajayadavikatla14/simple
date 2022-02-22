import React, {useState} from 'react'
import Usestate from './States_n_Props/Usestate'
// import State from './States_n_Props/State'
// import Prop from './States_n_Props/Prop'

// const state ={
//   name :'stewert',
//   age: 35,
// }


const App = () => {
  
const [data, setData] =useState({ 
  name:'steve' ,
  age: 50})

  const {name,age} = data;
  return (
    <>
         <Usestate name={name} age={age} />
    </>
  )
}

export default App