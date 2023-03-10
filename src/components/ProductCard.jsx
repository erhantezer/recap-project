import React from 'react'
import { useGlobalContext } from '../context/context'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const url = "https://63a16242a543280f7754aaa3.mockapi.io/products";

const ProductCard = ({ item }) => {
    const { getProducts } = useGlobalContext()
    const { name, image, price, dampingRate, amount, id } = item
    const navigate = useNavigate();


    //! put(update)
    const handleMinus = async () => {
        if (amount > 0) {
            try {
                await axios.put(`${url}/${id}`, { ...item, amount: amount - 1 })
            } catch (error) {
                console.log(error)
            }
            getProducts()
        } else {
            handleDelete()
        }

    }

    //! put(update)
    const handlePlus = async () => {
        try {
            await axios.put(`${url}/${id}`, { ...item, amount: amount + 1 })
        } catch (error) {
            console.log(error)
        }
        getProducts()
    }

    //! delete
    const handleDelete = async () => {
        try {
            await axios.delete(`${url}/${id}`)
        } catch (error) {
            console.log(error)
        }
        getProducts()
    }


    //! edit state uselocation olarak updateTotal sayfasında karşıla
    const editProduct = () => {
        navigate("/update-product", { state: item })
    }

    return (
        <>
            <div className="card shadow-lg mb-3" key={id}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img
                            src={image}
                            className="w-100 h-100 rounded-start"
                            alt={name}
                            title={name}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title" role="button" onClick={editProduct}>
                                {name}
                            </h5>
                            <div className="product-price">
                                <p className="text-warning h2">
                                    $
                                    <span className="damping-price">
                                        {(price * dampingRate).toFixed(2)}
                                    </span>
                                    <span className="h5 text-dark text-decoration-line-through"> 
                                        {price}
                                    </span>
                                </p>
                            </div>
                            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
                                <div className="quantity-controller">
                                    <button
                                        className="btn btn-secondary btn-sm" onClick={handleMinus}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <p className="d-inline mx-4" id="product-quantity">
                                        {amount}
                                    </p>
                                    <button
                                        className="btn btn-secondary btn-sm" onClick={handlePlus}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="product-removal mt-4">
                                <button
                                    className="btn btn-danger btn-sm w-100 remove-product" onClick={handleDelete}>
                                    <i className="fa-solid fa-trash-can me-2"></i>Remove
                                </button>
                            </div>
                            <div className="mt-2">
                                Product Total: $
                                <span className="product-line-price">
                                    {(price * dampingRate * amount).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard