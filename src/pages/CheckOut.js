import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {RiArrowRightSLine, RiInputMethodFill} from 'react-icons/ri'
import {FaTimes,FaPlus,FaMinus,FaArrowRight} from 'react-icons/fa'
import './scss/CheckOut.scss'
import { useRef } from 'react'
import { useGlobalContext } from '../context'
import { useEffect } from 'react'
import Modal from 'react-modal';

Modal.setAppElement("#root");
const CheckOut = () => {
    const {totalPrice,cartLoading} = useGlobalContext();
    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('cartList')));
    const [inputState, setInputState] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        country: '',
        post: ''
    })
    const [modal, setModal] = useState(false);
    const location = useHistory();

    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const regionRef = useRef(null);
    const postRef = useRef(null);
    const addressRef = useRef(null);

    const handleChange = (e) =>{
        setInputState({
            ...inputState,
            [e.target.name] : e.target.value
        });

        if (e.target.name === 'email') {
            emailRef.current.style.borderColor = '#6d6d6d'
        }
        if (e.target.name === 'firstName') {
            nameRef.current.style.borderColor = '#6d6d6d'
        }

        if (e.target.name === 'country') {
            regionRef.current.style.borderColor = '#6d6d6d'
        }
        if (e.target.name === 'post') {
            postRef.current.style.borderColor = '#6d6d6d'
        }
        if (e.target.name === 'address') {
            addressRef.current.style.borderColor = '#6d6d6d'
        }
    }

    const handleSubmit = () => {
        //
        if (inputState.firstName && inputState.email && inputState.country && inputState.post && inputState.address) {
            setModal(!modal)
        }
        if (!inputState.email) {
            emailRef.current.style.borderColor = 'red'
        }
        if (!inputState.firstName) {
            nameRef.current.style.borderColor = 'red'
        }
        if (!inputState.country) {
            regionRef.current.style.borderColor = 'red'
        }
        if (!inputState.post) {
            postRef.current.style.borderColor = 'red'
        }
        if (!inputState.address) {
            addressRef.current.style.borderColor = 'red'
        }
    }
    
    const toggleModal = () => {
        setModal(!modal);
    }
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
                            <input type="email" name="email" value={inputState.email} onChange={(e) => handleChange(e)} placeholder="put your email" ref={emailRef}/>
                            <label className="checked-label"><input type="checkbox" /> Keep me up to date on news and offers</label>
                        </div>

                        <div className="shipping-address">
                            <label className="title-label">Shipping Address</label>
                            <div className="flex-2 names">
                                <input type="text" name="firstName" value={inputState.firstName} onChange={(e) => handleChange(e)} placeholder="First name *" ref={nameRef}/>
                                <input type="text" name="lastName" value={inputState.lastName} onChange={(e) => handleChange(e)} placeholder="Last name(optional)" />
                            </div>
                            <div className="flex-2 region">
                                <input type="text" name="country" value={inputState.country} onChange={(e) => handleChange(e)} placeholder="country / region *" ref={regionRef}/>
                                <input type="number" name="post" value={inputState.post} onChange={(e) => handleChange(e)} placeholder="Postal code * " ref={postRef}/>
                            </div>
                            <div>
                                <input type="text" name="apartment" value={inputState.apartment} onChange={(e) => handleChange(e)} placeholder="Apartment, suite, etc. (optional)" />
                            </div>
                            <div>
                                <input type="text" name="address" value={inputState.address} onChange={(e) => handleChange(e)} placeholder="Address * " ref={addressRef}/>
                            </div>
                            <div>
                            <label className="checked-label"><input type="checkbox" /> Save this information for next time</label>
                            </div>
                        </div>
                        <div className="btn-container">
                            <button className="btn-white" onClick={() => handleSubmit()}>Continue to Shipping</button>
                            <button className="btn-black">Return to cart</button>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <div className="accordion">
                        <div className="left-content">
                            <strong>Total Amount</strong>
                        </div>
                        <div className="right-content">
                            <strong>${(((totalPrice - ((totalPrice / 100)*5)) + (totalPrice / 100)*15) + 45).toFixed(2)}</strong>
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
                            <span className="price">-${((totalPrice / 100)*5).toFixed(2)}</span>
                        </div>
                        <div className="div">
                            <span className="tag">Shipping charge</span>
                            <span className="price">+$45.00</span>
                        </div>
                        <div className="div">
                            <span className="tag">Taxes</span>
                            <span className="price">+${((totalPrice / 100)*15).toFixed(2)}</span>
                        </div>
                        <div className="div main-total">
                            <span className="tag">Total</span>
                            <span className="price">${(((totalPrice - ((totalPrice / 100)*5)) + (totalPrice / 100)*15) + 45).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modal}
        onRequestClose={toggleModal}
        className="addCartModal"
        style={{
            overlay: {
            backgroundColor: 'rgba(109, 109, 109,0.4)'
            }
        }}>
            <div className="modal-container">
                <h2 className="h2">hey {inputState.firstName}</h2>
                <h4 className="h4">This page is under maintenance.</h4>
                <h4 className="h4">Thank you for stay with us.</h4>
                <button className="btn-black" onClick={() => location.push('/')}>Home</button>
            </div>
        </Modal>
        </div>
    )
}

export default CheckOut
