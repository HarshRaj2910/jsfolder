import React from 'react'
import { BrowserRouter, Link, Route, Routes}from 'react-router-dom'
import ViewData from './pages/ViewData'
import AddData from './pages/AddData'
import EditData from './pages/EditData'

function App() {
  return (
    <div style={{padding:"12px",margin:"0px"}}>
    <BrowserRouter>
    <Link to='/add'style={{padding:"14px",background:"skyblue",
    textDecoration:"none",marginBottom:"12px"}}>+Add</Link>
    
    <Routes>
      <Route path='/' element={<ViewData/>}></Route> 
      <Route path='/add' element={<AddData/>}></Route>
      <Route path='/edit/:id' element={<EditData/>}></Route>
    </Routes>

    </BrowserRouter>
      
    </div>
  )
}

export default App
