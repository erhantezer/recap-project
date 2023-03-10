import React from 'react'
import ProductForm from '../components/ProductForm'
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const { item } = useLocation();
  const url = "https://63a16242a543280f7754aaa3.mockapi.io/products";
  const navigate = useNavigate(); //! update işlemi tamamlandığında geldiğim sayfaya geri dönmek için

  return (
    <div className='container'>
      <ProductForm text="Update" />
    </div>
  )
}

export default UpdateProduct