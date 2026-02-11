import React from 'react'
import Signup from './Signup'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './Login'

function App() {
  const [isAuthenticated, setIsAuthenticated]=useState(false);
  const PrivateRoute=({element})=>{}
  return (
    <div>
      
      <BrowserRouter>
      <RefreshHandler setIsAuthenticated={isAuthenticated}/>
        <Routes>
              <Route path='/home' element={<PrivateRoute element={<Home/>}/>}
              </Route> 
              <Route path='/signup' element={<Signup/>}></Route> 
              <Route path='/login' element={<Login/>}></Route>
       </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  )
}

export default App
