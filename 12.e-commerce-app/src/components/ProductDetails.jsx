import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { useParams } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import '../css/ProductDetails.css'

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector(store => store.products);

    const { category, description, image, price, title } = selectedProduct;

    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        getProductById();
    }, [])

    const increaseCount = () => {
        setCount(count + 1);
    }
    const decreaseCount = () => {
        setCount(count - 1);
    }

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
                // return <Product key={product.id} product={product} />
            }
        })
    }

    return (
        <div className="product-container">
            <div>
                <img className="product-image" src={image} alt="" />
            </div>
            <div>
                <h1 className="product-title">{title}</h1>
                <p className="product-description">{description}</p>
                <h3 className="product-category">{category}</h3>
                <h1 className="product-price">{price} ₺</h1>

                <div className="counter-container">
                    <CiCirclePlus className="counter-icon" onClick={increaseCount} />
                    <span className="counter-number">{count}</span>
                    <CiCircleMinus className="counter-icon" onClick={decreaseCount} />
                </div>

                <button className="add-to-cart">Sepete Ekle</button>
            </div>
        </div>
    );
}

export default ProductDetails