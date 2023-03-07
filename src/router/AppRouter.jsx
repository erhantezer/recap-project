import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from '../pages/Main'
import About from '../pages/About'
import ProductList from '../pages/ProductList'
import NewProduct from '../pages/NewProduct'
import UpdateProduct from '../pages/UpdateProduct'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
    return (
        
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='about' element={<About/>} />
                <Route path='product-list' element={<ProductList/>} />
                <Route path='new-product' element={<NewProduct/>} />
                <Route path='/update-product' element={<PrivateRouter/>}>
                    <Route path='' element={<UpdateProduct/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter