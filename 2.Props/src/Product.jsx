import React from 'react'

function Product({ name, price }) {
    // const { name, price } = props; //object destructing
    //Product(props) yerine icerisinde destructed edilmis olarak {name, price} verilebilir
    return (
        <div>
            <h3>Ürün Bilgileri</h3>
            <div>
                <div>İsim: {name}</div>
                <div>Fiyat: {price} TL</div>
            </div>
            {/* <div>
                <div>İsim: {props.name}</div>
                <div>Fiyat: {props.price} TL</div>
            </div> */}
        </div>
    )
}

export default Product