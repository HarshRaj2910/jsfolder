import React from 'react'
import Signup from './Signup'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
      <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
