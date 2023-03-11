
import { useLocation, useNavigate } from 'react-router-dom';
import UpdateForm from '../components/UpdateForm';
import { useState } from 'react';
import axios from 'axios';

const url = "https://63a16242a543280f7754aaa3.mockapi.io/products";

const UpdateProduct = () => {
  const { state:item } = useLocation();
  const [formUpdate, setFormUpdate] = useState(item);
  const navigate = useNavigate(); //! update işlemi tamamlandığında geldiğim sayfaya geri dönmek için

  const handleChange = (e) => {
    setFormUpdate({ ...formUpdate, [e.target.id]: e.target.value })
  };
console.log(item)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${url}/${item.id}`, formUpdate)
      navigate(-1) //!bir önceki sayfaya edit butonuna bastığımız sayfaya geri git
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='container'>
      <UpdateForm
        text="Update"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formUpdate={formUpdate}
      />
    </div>
  )
}

export default UpdateProduct