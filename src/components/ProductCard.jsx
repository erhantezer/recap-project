import React from 'react'
import { useGlobalContext } from '../context/context'
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
    const { products, getProducts } = useGlobalContext()
    const { name, image, price, dampingRate, amount, id } = products
    const navigate = useNavigate();

    console.log(name)


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
                            <h5 className="card-title" role="button" >
                                name
                            </h5>
                            <div className="product-price">
                                <p className="text-warning h2">
                                    $
                                    <span className="damping-price">
                                        price
                                    </span>
                                    <span className="h5 text-dark text-decoration-line-through">
                                        price
                                    </span>
                                </p>
                            </div>
                            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
                                <div className="quantity-controller">
                                    <button
                                        className="btn btn-secondary btn-sm">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <p className="d-inline mx-4" id="product-quantity">

                                    </p>
                                    <button
                                        className="btn btn-secondary btn-sm">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="product-removal mt-4">
                                <button
                                    className="btn btn-danger btn-sm w-100 remove-product">
                                    <i className="fa-solid fa-trash-can me-2"></i>Remove
                                </button>
                            </div>
                            <div className="mt-2">
                                Product Total: $
                                <span className="product-line-price">
                                    hello price
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