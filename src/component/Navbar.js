import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {FaSearch,FaUser,FaRegHeart,FaShoppingCart,FaPhone} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import './scss/Navbar.scss'
const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-container">
                    <div className="top-nav">
                        <div className="top-nav-container">
                            <div className="left">
                                <span><FaPhone /> +0123456789</span>
                                <span><FiMail /> noreplay@domain.com</span>
                            </div>
                            <div className="middle">
                                <span>Summer sale discount off <span className="spacial">50</span>%! Shop Now</span>
                            </div>
                            <div className="right">
                                <span>english</span>
                                <span>usa</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-nav">
                        <div className="bottom-nav-container">
                            <div className="menu-container">
                                <div className="menu">
                                    menu
                                </div>
                            </div>
                            <div className="logo-container">
                                <div className="logo">
                                    <Link to="/">Kalles</Link>
                                </div>
                            </div>
                            <div className="links-container">
                                <ul>
                                    <li><NavLink exact to="/">Home</NavLink></li>
                                    <li><NavLink exact to="/shop">Shop</NavLink></li>
                                    <li><NavLink exact to="/product">Product</NavLink></li>
                                    <li><NavLink exact to="/blog">Blog</NavLink></li>
                                    <li><NavLink exact to="/about">About</NavLink></li>
                                </ul>
                            </div>
                            <div className="nav-btn-container">
                                <ul>
                                    <li><button><FaSearch /></button></li>
                                    <li className="user"><button><FaUser /></button></li>
                                    <li className="like"><button><FaRegHeart /> <span>0</span></button></li>
                                    <li><button><FaShoppingCart /> <span>0</span></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
