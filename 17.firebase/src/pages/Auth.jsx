import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../Firebase'

function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            debugger
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user;
            if (user) {
                toast.success('kullanici olusturuldu');
                setEmail('');
                setPassword('');
            }
        }
        catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='auth'>
            <h3 className='auth-header'>Giris Yap / Kaydol</h3>
            <div className='input-div'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email adres' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Sifre' />
            </div>
            <div className='button-div'>
                <button className='google-button'> <FaGoogle /> Google ile Giris Yap</button>
                <button className='login-button'>Giris Yap</button>
                <button onClick={register} className='register-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth