import React from 'react'
import ProductForm from '../components/ProductForm'
import { useLocation } from 'react-router-dom';

const UpdateProduct = () => {
  const { item } = useLocation();
  return (
    <div className='container'>
      <ProductForm text="Update" />
    </div>
  )
}

export default UpdateProduct