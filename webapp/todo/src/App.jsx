import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Accounts from './pages/Accounts'
import Profile from './pages/Profile'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}>
            <Route path='accounts' element={<Accounts/>}></Route>
            <Route path='profile' element={<Profile/>}></Route>
          </Route>
          <Route path='/services' element={<Services/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
