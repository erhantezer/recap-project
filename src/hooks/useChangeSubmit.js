import axios from "axios";
import { useState } from "react";



const url = "https://63a16242a543280f7754aaa3.mockapi.io/products";

const initialState = {
    name: "",
    image: "",
    price: "",
    dampingRate: 0.8,
    amount: 1,
}

const useChangeSubmit = () => {
    const [formChange, setFormChange] = useState(initialState);


    const handleSubmit = (e) => { //! post işlemi yapmak gerek
        e.preventDefault()
        try {
            axios.post(url, formChange)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setFormChange({ ...formChange, [e.target.id]: e.target.value })
        //change eventının gerçekleştiği inputtaki id attribute u ile 
        //formChange key değerlerim aynı olduğu için dinamik bir şekilde formData mı güncelleybiliyorum
    }



    return { handleSubmit, handleChange, formChange }

}

export default useChangeSubmit