import React from 'react'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer, calculateBasket } from '../redux/slices/basketSlice'
import { useEffect } from 'react'

function BasketDrawer() {

  const dispatch = useDispatch();
  const { products, drawer, totalPrice } = useSelector(store => store.basket);

  useEffect(() => {
    dispatch(calculateBasket());
  }, [])

  return (
    <div>
      <Drawer className="drawer" anchor="right" open={drawer} onClose={() => dispatch(setDrawer())}>
        {products && products.map((product) => (
          <div className="drawer-item" key={product.id}>
            <img src={product.image} width={50} height={50} />
            <p className="title">{product.title} <b>({product.count})</b></p>
            <p className="price">{product.price} ₺</p>
            <button className="delete-button">Sil</button>
          </div>
        ))}
        <div>
          <p>Toplam Tutar:{Number(totalPrice.toFixed(2))} ₺</p>
        </div>
      </Drawer>
    </div>
  )
}

export default BasketDrawer

