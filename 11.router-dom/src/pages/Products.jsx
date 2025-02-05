import React from 'react'
import Product from '../components/Product'
import { products } from '../data/products'

function Products() {
    return (
        <>
            <h1>Products</h1>
            <div>
                {
                    products && products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </>
    )
}

export default Products