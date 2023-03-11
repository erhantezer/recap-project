
import { useLocation, useNavigate } from 'react-router-dom';
import UpdateForm from '../components/UpdateForm';
import { useState } from 'react';

const url = "https://63a16242a543280f7754aaa3.mockapi.io/products";

const UpdateProduct = () => {
  const { item } = useLocation();
  const [formUpdate, setFormUpdate] = useState(item);
  const navigate = useNavigate(); //! update işlemi tamamlandığında geldiğim sayfaya geri dönmek için

  const handleChange = (e) => {
    setFormUpdate({ ...formUpdate, [e.target.id]: e.target.value })
  };


  const handleSubmit = (e) => {
    
  }


  return (
    <div className='container'>
      <UpdateForm
        text="Update"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default UpdateProduct