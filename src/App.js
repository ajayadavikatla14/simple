import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Edit from './Form_Project/Edit'
import Register from './Form_Project/Register'
    

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Register />}  />
            <Route path='/edit' element={ <Edit />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App