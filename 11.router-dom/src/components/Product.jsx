import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {

    const { id, name, price } = product;
    const navigate = useNavigate();
    //navigate: icerisinde vermis oldugumuz url'e bizi yonlendirir
    return (
        <div style={{ marginBottom: '40px', backgroundColor: 'lightgreen' }}>
            <div>Urun detay</div>
            <h3>ürün adi :{name}</h3>
            <h3>ürün fiyati {price} ₺</h3>
            <button onClick={() => navigate("/product-details/" + id)}>Details</button>
        </div>
    )
}

export default Product