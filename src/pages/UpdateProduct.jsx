import React from 'react'
import ProductForm from '../components/ProductForm'
import { useLocation } from 'react-router-dom';

const UpdateProduct = () => {
  const { item } = useLocation();
  const url = "https://63a16242a543280f7754aaa3.mockapi.io/products";
  
  return (
    <div className='container'>
      <ProductForm text="Update" />
    </div>
  )
}

export default UpdateProduct