import React, { useEffect } from 'react'
import { getAllProducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'

function ProductList() {

    const dispatch = useDispatch();
    const { products } = useSelector(store => store.products)
    console.log({ products });

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    return (
        <div>

        </div>
    )
}

export default ProductList