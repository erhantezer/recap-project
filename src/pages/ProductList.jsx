import React from 'react'
import { useGlobalContext } from '../context/context'
import ProductCard from '../components/ProductCard';
import CardTotal from '../components/CardTotal';

const ProductList = () => {
    const { products, loading, error } = useGlobalContext();

    console.log(products)

    return (

        <div className="container mt-3">
            <div className={"bg-light d-sm-block d-md-flex"}>
                {loading ? (
                    <p className="text-center text-danger w-100">Loading....</p>
                ) : products.length > 0 ? (
                    <>
                        <article id="product-panel" className="col-md-5">
                            {products.map(item => {
                                return (
                                    <ProductCard
                                        key={item.id}
                                        item={item}
                                    />
                                );
                            })}
                        </article>
                        <article className="col-md-5 m-3">
                            <CardTotal />
                        </article>
                    </>
                ) : (

                    !error && (
                        <p className="text-center text-danger w-100">No products data...</p>
                    )
                )}

                {error && (
                    <p className="text-center text-danger w-100">Error...</p>
                )}
            </div>
        </div>
    )


}

export default ProductList