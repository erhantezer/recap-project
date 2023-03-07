import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from '../pages/Main'
import About from '../pages/About'
import ProductList from '../pages/ProductList'
import NewProduct from '../pages/NewProduct'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='about'element={<About/>} />
                <Route path='product' element={<ProductList/>} />
                <Route path='newproduct' element={<NewProduct/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter