import React, { useState } from 'react'
import '../css/Header.css'
import { FaBasketShopping } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';
import { setSearchText } from '../redux/slices/productSlice';

function Header() {

    const [theme, setTheme] = useState(true);
    const navigate = useNavigate();

    const { products } = useSelector(store => store.basket);

    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(setSearchText(event.target.value)); // Arama metnini Redux'a gönderiyoruz
    };

    const changeTheme = () => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        }
        else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row' style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>E-Commerce App</p>
            </div>

            <div className='flex-row'>
                <input className="search-input" onChange={handleSearch} type='text' placeholder='aramak istediğiniz ürünü giriniz' />
                <div>
                    {
                        theme ?
                            <FaMoon className='icon' onClick={changeTheme} /> :
                            <CiLight className='icon' onClick={changeTheme} />
                    }
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="warning">
                        <FaBasketShopping style={{ marginRight: '8px' }} className='icon' />
                    </Badge>



                </div>
            </div>
        </div>
    )
}

export default Header