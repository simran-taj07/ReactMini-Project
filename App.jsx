import React from 'react'
import Nav from './Components/Nav'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { ToastContainer  , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import "./global.css"
import Cart from './Components/Cart';
import Product from './Components/Product'
import Update from './Components/Update';
const App = () => {
  return (

      
      
      <div>
      <ToastContainer/>
       <Router>
          <Nav/>
          <Routes>
              <Route path='/' element={<Cart/>} />
              <Route path="/Product" element={<Product/>}/>
              <Route path='/Update/:id' element={<Update/>}/>
          </Routes>
       </Router>
    </div>
    
    
  )
}

export default App
