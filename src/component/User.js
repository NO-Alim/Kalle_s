import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './scss/User.scss'

const User = () => {
    const [login, setLogin] = useState(true);
    const [create, setCreate] = useState(false);
    const [recover, setRecover] = useState(false);

    useEffect(() => {
    },[login,create,recover])

    
    return (
        <div className="user-container">
            <div className="user-heading">
                <h4 className="h4">{login && 'Login'}{create && 'Create an account'}{recover && 'reset password'}</h4>
            </div>
            <div className="user-form">
                <form className={`from ${login ? 'active' : null}`}>
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="email" required/>
                    <label htmlFor="password">Password <span>*</span></label>
                    <input type="password" />
                    <button className="btn-white">Sign in</button>
                    <div className="toggle">New Customer ? <span onClick={() => {setCreate(true);setLogin(false)}}>Create your account</span></div>
                    <div className="toggle">Lost Password? <span onClick={() => {setRecover(true);setLogin(false);setCreate(false)}}>Recover password</span></div>
                </form>
                <form className={`from ${create ? 'active' : null}`}>
                    <label htmlFor="firstName">First Name <span>*</span></label>
                    <input type="text" />
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" />
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="email" required/>
                    <label htmlFor="password">Password <span>*</span></label>
                    <input type="password" />
                    <button className="btn-white">Sign in</button>
                    <div className="toggle" >Already have an account ? <span onClick={() => {setLogin(true);setCreate(false);setRecover(false)}}>Login here</span></div>
                </form>
                <form className={`from ${recover ? 'active' : null}`}>
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="email" required/>
                    <button className="btn-white">Reset Password</button>
                    <div className="toggle">Already have an account ? <span onClick={() => {setLogin(true);setCreate(false);setRecover(false)}}>Login here</span></div>
                </form>
            </div>
        </div>
    )
}

export default User
