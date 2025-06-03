import React from 'react'
import Signin from './page/Signin'
import { Route, Routes } from 'react-router-dom'
import Home from './page/home/home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin />} />
        {/* Add more routes as needed */}
        </Routes>
      
    </div>
  )
}

export default App
