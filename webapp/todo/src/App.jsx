import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' ></Route>
          <Route path='/about'></Route>
          <Route path='/contact'></Route>
          <Route path='/services'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
