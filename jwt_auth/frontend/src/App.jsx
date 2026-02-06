import React from 'react'
import Signup from './Signup'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './Login'

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Signup/>}></Route> 
              <Route path='/signup' element={<Signup/>}></Route> 
              <Route path='/login' element={<Login/>}></Route>
       </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  )
}

export default App
