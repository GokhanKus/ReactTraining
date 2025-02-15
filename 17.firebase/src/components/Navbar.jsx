import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

    const logout = async () => {
        await signOut(auth);
        navigate('/auth');
    }

    return (
        <div className='navbar'>
            <div className='navbar-left'>FIREBASE</div>
            <div className='navbar-left'>
                <Link to="/auth" className='navbar-link'>Auth</Link>
            </div>
            <div onClick={logout} className='navbar-right'>Cikis Yap</div>
        </div>
    )
}

export default Navbar