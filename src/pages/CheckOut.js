import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {RiArrowRightSLine, RiInputMethodFill} from 'react-icons/ri'
import './scss/CheckOut.scss'

const CheckOut = () => {
    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('cartList')));
    return (
        <div className="checkout section-container">
            <div className="flex-container">
                <div className="left-container">
                    <div className="logo-container">
                        <div className="link-container">
                            <ul>
                                <li><Link to="/fullcart">cart</Link> <span className="arrow"><RiArrowRightSLine /></span></li>
                                <li><span className="link active">Information</span> <span className="arrow"><RiArrowRightSLine /></span></li>
                                <li><span className="link">Shipping</span> <span className="arrow"><RiArrowRightSLine /></span></li>
                                <li><span className="link">Payment</span></li>
                            </ul>
                        </div>

                        <div className="contact-information">
                            <label className="title-label">Contact information</label>
                            <input type="email" placeholder="put your email" />
                            <label className="checked-label"><input type="checkbox" /> Keep me up to date on news and offers</label>
                        </div>

                        <div className="shipping-address">
                            <label className="title-label">Shipping Address</label>
                            <div className="flex-2 names">
                                <input type="text" name="first-name" placeholder="First name *" />
                                <input type="text" name="last-name" placeholder="Last name(optional)" />
                            </div>
                            <div className="flex-2 region">
                                <input type="text" name="country" placeholder="country / region *" />
                                <input type="number" name="post" placeholder="Postal code * " />
                            </div>
                            <div>
                                <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" />
                            </div>
                            <div>
                                <input type="text" name="address" placeholder="Address * " />
                            </div>
                            <div>
                            <label className="checked-label"><input type="checkbox" /> Save this information for next time</label>
                            </div>
                        </div>
                        <div className="btn-container">
                            <button className="btn-white">Continue to Shipping</button>
                            <button className="btn-black">Return to cart</button>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <div className="accordion">
                        <div className="left-content">
                            <strong>Show Order</strong>
                        </div>
                        <div className="right-content">
                            <strong>$24423</strong>
                        </div>
                    </div>
                    <div className="items-container">
                        {cartList.map((item, ind) => {
                            return(
                                <div className="item" key={ind}>
                                    <div className="img-container">
                                        <div className="img">
                                            <img src={item.image} alt="" />
                                            <span className="quantity">{item.quantity}</span>
                                        </div>
                                        <div className="name">
                                            <span>item name</span>
                                        </div>
                                    </div>
                                    <div className="price-container">
                                        <span>${item.price * item.quantity}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="subtotal-container">
                        <div className="div">
                            <span className="tag">5% OFF</span>
                            <span className="price">-$345</span>
                        </div>
                        <div className="div">
                            <span className="tag">5% OFF</span>
                            <span className="price">-$345</span>
                        </div>
                        <div className="div main-total">
                            <span className="tag">Total</span>
                            <span className="price">$23443</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
