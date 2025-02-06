import React, { useState } from 'react'
import '../css/Header.css'
import { FaBasketShopping } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function Header() {

    const [theme, setTheme] = useState(true);
    const navigate = useNavigate();
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
                <input className="search-input" type='text' placeholder='aramak istediğiniz ürünü giriniz' />
                <div>
                    {
                        theme ?
                            <FaMoon className='icon' onClick={changeTheme} /> :
                            <CiLight className='icon' onClick={changeTheme} />
                    }
                    <FaBasketShopping className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Header