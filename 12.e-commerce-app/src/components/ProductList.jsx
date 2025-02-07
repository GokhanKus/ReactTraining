import React, { useEffect } from 'react'
import { getAllProducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';

function ProductList() {

    const dispatch = useDispatch();
    const { products, searchText } = useSelector(store => store.products)

    // Ürün başlıklarına göre filtreleme
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    return (
        <div className='flex-row' style={{ flexWrap: 'wrap', marginTop: '25px' }}>
            {filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList