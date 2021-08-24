import React, { useState,useEffect,useRef } from 'react'
import {Link,NavLink, useHistory} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import {FiChevronsRight,FiMail} from 'react-icons/fi'
import {RiArrowDropDownLine,RiArrowRightSLine,RiDeleteBin6Line} from 'react-icons/ri'
import {FaSearch,FaUser,FaRegHeart,FaShoppingCart,FaPhone,FaTimes,FaPlus,FaMinus,FaArrowRight,FaFacebookF,FaTwitter,FaEnvelope,FaFacebookMessenger,FaPinterestP,FaGoogle,FaStar,FaStarHalf,FaHeart} from 'react-icons/fa'
import './scss/Navbar.scss'
import { useGlobalContext } from '../context';

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

    const {handleIncreaseCartItemStorage,handleDecreaseCartItemStorage,deleteCartItem,cartLoading} = useGlobalContext();
    //useState
    const [menuDrawer, setMenuDrawer] = useState(false);
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [searchDrawer, setSearchDrawer] = useState(false);
    const [userDrawer, setUserDrawer] = useState(false);

    //form localStorage 
    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('cartList')));


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

    //when modal open stop scrolling

    useEffect(() => {
        if (menuDrawer || cartDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else{
            document.body.style.overflow = 'unset';
        }
    },[menuDrawer, cartDrawerOpen])
    
    useEffect(() => {
        setCartList(JSON.parse(localStorage.getItem('cartList')));
        console.log('hello');
    },[cartLoading])

    return (
        <div>
            <nav>
                <div className="nav-container">
                    <div className="top-nav">
                        <div className="top-nav-container">
                            <div className="left">
                                <span><FaPhone />&nbsp; +0123456789</span>
                                <span><FiMail />&nbsp; noreplay@domain.com</span>
                            </div>
                            <div className="middle">
                                <span>Summer sale discount off <span className="spacial">50</span>%! Shop Now</span>
                            </div>
                            <div className="right">
                                <div className="drop-container">
                                    <span className="drop-btn drop-btn-one">english<i><RiArrowDropDownLine /></i></span>
                                </div>
                                <div className="drop-container">
                                    <span className="drop-btn drop-btn-two">USA<i><RiArrowDropDownLine /></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-nav">
                        <div className="bottom-nav-container">
                            <div className="menu-container">
                                <div className="menu" onClick={() => toggleMenuDrawerOpen()} ref={menuBtnRef}>
                                    <div className={`menus ${menuDrawer ? 'active' : null}`}>
                                        <div className="menu-bar"></div>
                                        <div className="menu-bar"></div>
                                        <div className="menu-bar"></div>
                                    </div>
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
                                    <li><NavLink exact to="/shop/all">Shop</NavLink></li>
                                    <li><NavLink exact to="/product">Product</NavLink></li>
                                    <li><NavLink exact to="/blogs">Blog</NavLink></li>
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
                        <div className="menu-container">
                            {/* <button className="close-btn btn-white" onClick={() => setMenuDrawer(false)}><FiChevronsRight /></button> */}
                            <div className="menu" onClick={() => setMenuDrawer(false)}>
                                <div className={`menus ${menuDrawer ? 'active' : null}`}>
                                    <div className="menu-bar"></div>
                                    <div className="menu-bar"></div>
                                    <div className="menu-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="logo">
                            <Link to="/" onClick={() => setMenuDrawer(false)}>Kalles</Link>
                        </div>
                    </div>
                    <div className="bottom-container">
                        <div className="link-container">
                            <ul>
                                <li><NavLink exact to="/" onClick={() => setMenuDrawer(false)}>Home</NavLink></li>
                                <li><NavLink exact to="/shop/all" onClick={() => setMenuDrawer(false)}>Shop</NavLink></li>
                                <li><NavLink exact to="/product" onClick={() => setMenuDrawer(false)}>Product</NavLink></li>
                                <li><NavLink exact to="/blogs" onClick={() => setMenuDrawer(false)}>Blog</NavLink></li>
                                <li><NavLink exact to="/about" onClick={() => setMenuDrawer(false)}>About</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Drawer>
            <Drawer className={classes.list} palette="secondary" variant="persistent" open={cartDrawerOpen} anchor="right" classes={{paper: classes.drawerPaper}}>
                <div className="drawer-container cart-drawer bg-sec" ref={cartRef}>
                    <div className="top-container flex-sb bg-font cl-bg pd-2">
                        <button className="close-btn btn-white" onClick={() => setCartDrawerOpen(false)}><FiChevronsRight /></button>
                        <h3 className="h3 tx-cp">Shopping Cart</h3>
                    </div>
                    <div className="bottom-container cart-Items-container">
                        {!cartList && <h3>Your Cart is Empty.</h3>}
                        {cartList ? cartList.length < 1 && <h3>Your Cart is Empty.</h3> : null}
                        {cartList && cartList.map((item,ind) => {
                            return(
                                <div className="cart-items" key={ind}>
                                    <div className="singel-cart">
                                        <div className="img-container">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="item-content">
                                            <h4 className="h4">Item name</h4>
                                            <span className="price">{item.price}</span>
                                            <div className="counter-container">
                                                <div className="counter">
                                                    <span className="counter-btn" onClick={() => handleDecreaseCartItemStorage(item.id)}><FaMinus /></span>
                                                    <input type="number" value={item.quantity} readOnly/>
                                                    <span className="counter-btn" onClick={() => handleIncreaseCartItemStorage(item.id)}><FaPlus /></span>
                                                </div>
                                            </div>
                                            <span className="delete-btn" onClick={() => deleteCartItem(item.id)}><RiDeleteBin6Line /></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                    <div className="sub-total-container">

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
