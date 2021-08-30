import React,{useEffect, useState} from 'react'
import { useGlobalContext } from '../context';
import {FaPlus,FaMinus} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FiGift} from 'react-icons/fi'
import './scss/FullCart.scss'
import { useHistory } from 'react-router-dom';
import { useRef } from 'react';

const FullCart = () => {
    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('cartList')));
    const [checked, setChecked] = useState(false);
    const warningRef = useRef(null);
    const {handleIncreaseCartItemStorage,handleDecreaseCartItemStorage,deleteCartItem,cartLoading,totalPrice} = useGlobalContext();
    
    const location = useHistory();


    const handleCheckOut = () =>{
        if (checked) {
            location.push('/checkout');
        } else{
            warningRef.current.style.color = 'red'
        }
    }
    
    useEffect(() => {
        setCartList(JSON.parse(localStorage.getItem('cartList')));
    },[cartLoading])

    useEffect(() => {
        if (checked) {
            warningRef.current.style.color = 'black'
        }
    },[checked])

    if (!cartList) {
        return (
            <h3 className="h3 section-container" style={{fontWeight: '400',textAlign: 'center'}}>There is no item in your cart.</h3>
        )
    }

    if (cartList && cartList.length < 1) {
        return(
            <h3 className="h3 section-container" style={{fontWeight: '400',textAlign: 'center'}}>There is no item in your cart.</h3>
        )
    }

    return (
        <div>
            <div className="full-cart-header">
                <h3 className="h3">Shopping Cart</h3>
            </div>
            <div className="shopping-cart-list section-container">
                <div className="shopping-cart-content">
                    <div className="table">
                        <div className="thead">
                            <div className="tr">
                                <div className="th flex-2"><span>product</span></div>
                                <div className="th"><span>price</span></div>
                                <div className="th"><span>quantity</span></div>
                                <div className="th"><span>total</span></div>
                            </div>
                        </div>
                        {cartList.map((item,ind) => {
                            return(
                                <div className="tbody" key={ind}>
                                    <div className="secondary-img-container" onClick={() => location.push(`/product/${item.id}`)}>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="tr">
                                        <div className="th flex-2">
                                            <div className="product-container">
                                                <div className="img-container" onClick={() => location.push(`/product/${item.id}`)}>
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="product-content">
                                                    <span className="name" onClick={() => location.push(`/product/${item.id}`)}>product name</span>
                                                    <span className="delete-btn" onClick={() => deleteCartItem(item.id)}><i><RiDeleteBin6Line /></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="th">
                                            <div className="price-container">
                                                <span className="price">$ {item.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className="th">
                                            <div className="quantity">
                                                <div className="counter-container">
                                                    <div className="counter">
                                                        <span className="counter-btn" onClick={() => handleDecreaseCartItemStorage(item.id)}><FaMinus /></span>
                                                        <input type="number" value={item.quantity} readOnly/>
                                                        <span className="counter-btn" onClick={() => handleIncreaseCartItemStorage(item.id)}><FaPlus /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="th">
                                            <div className="total">
                                                <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="tfoot">
                            <div className="tr">
                                <div className="th flex-2"></div>
                                <div className="th"></div>
                                <div className="th"></div>
                                <div className="th">
                                    <span className="subtotal">total :</span>
                                    <span className="subtotal-price">${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-cart-footer section-container">
                <div className="left-content">
                    <div className="gift-wrap">
                        <p><i><FiGift /></i> Do you want a gift wrap ? <span>Only $4.00</span></p>
                        <div className="btn-container">
                            <button className="btn-white">Add a Gift Wrap</button>
                        </div>
                    </div>
                    <div className="note">
                        <label htmlFor="note">add order note :</label>
                        <textarea name="note" placeholder="how can we help you"></textarea>
                    </div>
                    <div className="coupon">
                        <label htmlFor="coupon">coupon code will work on checkout page</label>
                        <input type="text" placeholder="coupon code"/>
                    </div>
                </div>
                <div className="right-content">
                    <div className="total-after-discount">
                        <div>
                            <span className="shipping-tag">shipping charge will be add before check out.</span>
                        </div>
                        <div className="div">
                            <span className="tag">Total</span>
                            <span className="price">${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="div">
                            <span className="tag">5% OFF</span>
                            <span className="price">-${((totalPrice / 100)*5).toFixed(2)}</span>
                        </div>
                        <div className="div">
                            <span className="tag">Taxes</span>
                            <span className="price">+${((totalPrice / 100)*15).toFixed(2)}</span>
                        </div>
                        <div className="div sub-total">
                            <span className="tag">Subtotal</span>
                            <span className="price">${(((totalPrice - ((totalPrice / 100)*5)) + (totalPrice / 100)*15)).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="btn-container">
                        <div className="checked">
                            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                            <label htmlFor="check" ref={warningRef}>I agree with the terms and condition.</label>
                        </div>
                        <button className="btn-black" onClick={() => handleCheckOut()}>CHECK OUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullCart
