import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const register = async () => {
        try {
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

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = response.user;
            if (user) {
                navigate('/');//islem basariliysa home'a yonlendirilsin
            }
        }
        catch (error) {
            toast.error("Giris yapilamadi" + error.message);
        }
    }

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(response);
            const token = credential.accessToken;
            const user = response.user;
            if (user) {
                navigate('/');
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
                <button onClick={loginWithGoogle} className='google-button'> <FaGoogle /> Google ile Giris Yap</button>
                <button onClick={login} className='login-button'>Giris Yap</button>
                <button onClick={register} className='register-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth