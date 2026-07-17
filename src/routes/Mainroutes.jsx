import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Product from '../components/Product'
import Service from '../components/Service'
import { Route, Routes } from 'react-router-dom'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Service" element={<Service />} />

      </Routes>
  )
}

export default Mainroutes