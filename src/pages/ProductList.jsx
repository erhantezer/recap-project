import React from 'react'
import { useGlobalContext } from '../context/context'
import ProductCard from '../components/ProductCard';
import CardTotal from '../components/CardTotal';

const ProductList = () => {
    const { products, loading, error } = useGlobalContext();


    if (loading) {
        return <p className="text-center text-danger w-100">Loading....</p>
    }

    if (products.length > 0) {
        return (
            <>
                <article id='product-panel' className='col-md-5'>
                    <ProductCard/>
                </article>
                <article className="col-md-5 m-3">
                    <CardTotal />
                </article>
            </>
        )
    }

    if (!error) {
        return <p className="text-center text-danger w-100">No products data...</p>
    } else {
        <p className="text-center text-danger w-100">Error...</p>
    }


}

export default ProductList