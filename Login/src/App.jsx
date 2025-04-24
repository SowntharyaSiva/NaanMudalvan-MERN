import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import './App.css'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
      </Routes>

      <Routes>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
     </BrowserRouter>
     
    </>
  )
}

export default App
