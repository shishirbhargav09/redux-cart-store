import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart';
import Home from './Pages/Home'
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
         
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
      
      
    </div>
  )
}

export default App