import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './RouterProject/Home'
import Dashboard from './RouterProject/Dashboard'
import About from './RouterProject/About'
import Pagenotfound from './RouterProject/Pagenotfound'

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard/:name' element={<Dashboard /> } />
            <Route path='/about' element={<About /> } />
            <Route path='*' element={<Pagenotfound />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App