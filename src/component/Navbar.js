import React, { useState,useEffect,useRef } from 'react'
import {Link,NavLink, useHistory} from 'react-router-dom'
import {FaSearch,FaUser,FaRegHeart,FaShoppingCart,FaPhone} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import {FiChevronsRight} from 'react-icons/fi'
import './scss/Navbar.scss'

const useStyle = makeStyles({
    root: {
        display: 'flex',
    },
    list: {
        width: 'auto',
    },
    fullList: {
        width: 'auto',
    },
    drawerPaper: {
        width: 'auto',
        background: 'transparent',
    }
})
const Navbar = () => {
    const location = useHistory();
    const classes = useStyle();


    //useState
    const [menuDrawer, setMenuDrawer] = useState(false);
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [searchDrawer, setSearchDrawer] = useState(false);
    const [userDrawer, setUserDrawer] = useState(false);

    //useRef 
    const menuRef = useRef(null);
    const menuBtnRef = useRef(null)
    const cartRef = useRef(null);
    const cartBtnRef = useRef(null);
    const searchRef = useRef(null);
    const searchBtnRef  = useRef(null);
    const userRef = useRef(null);
    const userBtnRef = useRef(null);

    //indivisual function

    const togglecartDrawerOpen = () => {
        setCartDrawerOpen(!cartDrawerOpen);
    }

    const toggleMenuDrawerOpen = () => {
        setMenuDrawer(!menuDrawer);
    }
    const toggleSearchDrawer = () => {
        setSearchDrawer(!searchDrawer)
    }
    const toggleUserDrawer = () => {
        setUserDrawer(!userDrawer);
    }


    const handleClick = (e) => {

        //menuDrawer
        if (!menuBtnRef.current.contains(e.target)) {
            if (!menuRef.current.contains(e.target)) {
                setMenuDrawer(false)
            }
        }

        //cartDrawer
        if (!cartBtnRef.current.contains(e.target)) {
            if (!cartRef.current.contains(e.target)) {
                setCartDrawerOpen(false)
            }
        }

        //searchDrawer 
        if (!searchBtnRef.current.contains(e.target)) {
            if (!searchRef.current.contains(e.target)) {
                setSearchDrawer(false);
            }
        }

        //userDrawer
        if (!userBtnRef.current.contains(e.target)) {
            if (!userRef.current.contains(e.target)) {
                setUserDrawer(false);
            }
        }


    }

    //useEffect

    useEffect(() =>{
        document.addEventListener('click', handleClick);
        return () =>{
            document.removeEventListener('click', handleClick);
        }
      })

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
                                <div className="menu" onClick={() => toggleMenuDrawerOpen()} ref={menuBtnRef}>
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
                                    <li><button onClick={() => toggleSearchDrawer()} ref={searchBtnRef}><FaSearch /></button></li>
                                    <li className="user" onClick={() => toggleUserDrawer()} ref={userBtnRef}><button><FaUser /></button></li>
                                    <li className="like"><button onClick={() => location.push('/wishlist')}><FaRegHeart /> <span>0</span></button></li>
                                    <li><button onClick={() => togglecartDrawerOpen()} ref={cartBtnRef}><FaShoppingCart /> <span>0</span></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Drawer className={classes.list} palette="secondary" variant="persistent" open={menuDrawer} anchor="left" classes={{paper: classes.drawerPaper}}>
                <div className="drawer-container menu-drawer bg-sec" ref={menuRef}>
                    <div className="top-container flex-sb">
                        <button className="close-btn btn-white" onClick={() => setMenuDrawer(false)}><FiChevronsRight /></button>
                        <h3 className="h3">Menu</h3>
                    </div>
                </div>
            </Drawer>
            <Drawer className={classes.list} palette="secondary" variant="persistent" open={cartDrawerOpen} anchor="right" classes={{paper: classes.drawerPaper}}>
                <div className="drawer-container cart-drawer bg-sec" ref={cartRef}>
                    <div className="top-container flex-sb bg-font cl-bg pd-2">
                        <button className="close-btn btn-white" onClick={() => setCartDrawerOpen(false)}><FiChevronsRight /></button>
                        <h3 className="h3 tx-cp">Shopping Cart</h3>
                    </div>
                </div>
            </Drawer>
            <Drawer className={classes.list} palette="secondary" variant="persistent" open={searchDrawer} anchor="right" classes={{paper: classes.drawerPaper}}>
                <div className="drawer-container search-drawer bg-sec" ref={searchRef}>
                    <div className="top-container flex-sb bg-font cl-bg pd-2">
                        <button className="close-btn btn-white" onClick={() => setSearchDrawer(false)}><FiChevronsRight /></button>
                        <h3 className="h3 tx-cp">Search</h3>
                    </div>
                </div>
            </Drawer>
            <Drawer className={classes.list} palette="secondary" variant="persistent" open={userDrawer} anchor="right" classes={{paper: classes.drawerPaper}}>
                <div className="drawer-container user-drawer bg-sec" ref={userRef}>
                    <div className="top-container flex-sb bg-font cl-bg pd-2">
                        <button className="close-btn btn-white" onClick={() => setUserDrawer(false)}><FiChevronsRight /></button>
                        <h3 className="h3 tx-cp">User</h3>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Navbar
