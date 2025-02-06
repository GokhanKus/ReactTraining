import React from 'react'
import '../css/Product.css'
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, image, price, title } = product;
    const navigate = useNavigate();
    return (
        <div className='card'>
            <img className='image' src={image} alt='' />
            <div>
                <p style={{ textAlign: 'center', height: '50px' }}>{title}</p>
                <h3 style={{ textAlign: 'center' }}>{price} ₺</h3>
            </div>
            <div className='flex-row'>
                <button className="detail-button" onClick={() => navigate("/product-details/" + id)}>Details <FaArrowCircleRight /></button>

            </div>
        </div>)
}

export default Product