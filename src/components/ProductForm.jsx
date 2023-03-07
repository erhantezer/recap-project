import React from 'react'

const initialState = {
    name: "",
    image:"",
    price:"",
    dampingRate: 0.8,
    amount: 1,
}

const ProductForm = () => {



    return (
        <article id="add-product" className="mb-4 mt-4">
            <h1 className="text-center">New Product</h1>
            <form className="p-2" >
                <div className="mb-3">
                    <label for="add-name" className="form-label">
                        Product Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        
                        
                        required
                    />
                </div>
                <div className="mb-3">
                    <label for="add-price" className="form-label">
                        Product Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        
                        required
                    />
                </div>
                <div className="mb-3">
                    <label for="add-quantity" className="form-label">
                        Product Quantity
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="amount"
                        
                        required
                    />
                </div>
                <label for="add-image" className="form-label">
                    Product Image
                </label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">
                        https://example.com/
                    </span>
                    <input
                        type="url"
                        className="form-control"
                        id="image"
                        
                        aria-describedby="basic-addon3"
                        required
                    />
                </div>
                <div className="text-center d-grid mt-5">
                    <button type="submit" className="add-to-cart btn btn-success btn-sm p-2 fw-bolder md-block fs-5">
                        <i className="fa-solid fa-cart-plus me-2"></i>Save To New Product
                    </button>
                </div>
            </form>
        </article>
    )
}

export default ProductForm

// inputları doldurup boşaltabilmek için value attributeunu kullandık ve değer olarakda formDatadan gelen verileri koyduk
//? tek bir handlechange fonksiyonuyla birden fazla inputtan veri almış olduk