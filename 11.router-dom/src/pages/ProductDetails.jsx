import React from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product'
import { products } from '../data/products'

function ProductDetails() {
    const { id } = useParams();
    return (
        <div>
            <h1>Product Details</h1>
            <hr />
            <div>
                {
                    products && products.map((product) => {
                        if (product.id == id) {
                            return <Product product={product} />
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ProductDetails