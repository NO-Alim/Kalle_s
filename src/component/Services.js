import React from 'react'
import './scss/Services.scss'
import {AiOutlineCar} from 'react-icons/ai'
import {TiSupport} from 'react-icons/ti'
import {BsArrowReturnLeft} from 'react-icons/bs'
import {RiSecurePaymentLine} from 'react-icons/ri'

const Services = () => {
    return (
        <div className="section-container services">
            <div className="grid-container">
                <div className="grid-item">
                    <div className="icon">
                        <i><AiOutlineCar /></i>
                    </div>
                    <div className="content">
                        <h5>FREE SHIPPING</h5>
                        <p>Free shipping on all US order or order above $100</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="icon">
                        <i><TiSupport /></i>
                    </div>
                    <div className="content">
                        <h5>SUPPORT 24/7</h5>
                        <p>Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="icon">
                        <i><BsArrowReturnLeft /></i>
                    </div>
                    <div className="content">
                        <h5>30 DAYS RETURN</h5>
                        <p>Simply return it within 30 days for an exchange.</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="icon">
                        <i><RiSecurePaymentLine /></i>
                    </div>
                    <div className="content">
                        <h5>100% PAYMENT SECURE</h5>
                        <p>We ensure secure payment with PEV</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
