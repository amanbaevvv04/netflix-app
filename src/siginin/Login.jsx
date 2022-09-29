import React from 'react'
import { signInWithGoogle } from '../firebase/config'
import logo from '../components/img/Logo.png'
import './Login.css'

function Login() {
    return (
        <div className='block'>
            <div className='login'>
                <img src={logo} alt='logo' loading='lazy' /> <br/>
                <button className='loginBtn' onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default Login