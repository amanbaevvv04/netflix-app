import React, { useState, useEffect } from 'react'
import { auth } from '../firebase/config'
import Logo from './img/Logo.png'
import './Navbar.css'

function Navbar({ user }) {
    const [fixed, setFixed] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setFixed(true)
            } else {
                setFixed(false)
            }
        })
    })
    return (
        <div className={`navbar ${fixed && 'fixedNav'}`}>
            <a className='brend' href='#'>
                <img  src={Logo} alt="Logo" />
            </a>
            <button className='authButton' onClick={() => auth.signOut()}>
                <img src={user.photoURL} alt='auth user' className='userImage' />
            </button>
        </div>
    )
}

export default Navbar