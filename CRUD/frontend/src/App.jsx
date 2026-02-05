import React from 'react'
import { BrowserRouter, Link, Route, Routes}from 'react-router-dom'
import ViewData from './pages/ViewData'

function App() {
  return (
    <div style={{padding:"12px",margin:"0px"}}>
    <BrowserRouter>
    <Link to=''>+Add</Link>
    
    <Routes>
      <Route path='/' element={<ViewData/>}></Route> 
    </Routes>

    </BrowserRouter>
      
    </div>
  )
}

export default App
