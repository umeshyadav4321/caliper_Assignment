import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './homepage/Homepage'
import Login from './Login/Login'
import Products from './Products/Products'

const MainRouting = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
    </Routes>
  )
}

export default MainRouting