import React from 'react'

function Auth() {
    return (
        <div className='auth'>
            <h3 className='auth-header'>Giris Yap / Kaydol</h3>
            <div className='input-div'>
                <input type='text' placeholder='Email adres' />
                <input type='password' placeholder='Sifre' />
            </div>
            <div className='button-div'>
                <button className='login-button'>Giris Yap</button>
                <button className='register-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth