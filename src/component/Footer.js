import React from 'react'
import {Link} from 'react-router-dom'
import {FiPlus,FiMapPin,FiPhone} from 'react-icons/fi'
import {BiEnvelope} from 'react-icons/bi'
import './scss/Footer.scss'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="section-container footer-container">
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="top-container">
                                <div className="logo-container">
                                    <div className="logo media-large">
                                        <Link to="/">Kalles</Link>
                                    </div>
                                    <div className="media-small">
                                        <span>Get in touch</span>
                                        <i><FiPlus /></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-container footer-content">
                                <div className="sub-sec">
                                    <i><FiMapPin /></i>
                                    <span>184 Main Rd E, St Albans VIC 3021, Australia</span>
                                </div>
                                <div className="sub-sec">
                                    <i><BiEnvelope /></i>
                                    <a href="#">noreplay@company.com</a>
                                </div>
                                <div className="sub-sec">
                                    <i><FiPhone /></i>
                                    <span>+001 2233 456</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="top-container">
                                <div className="logo-container">
                                    <div className="media-large">
                                        <h5>categories</h5>
                                    </div>
                                    <div className="media-small">
                                        <span>categories</span>
                                        <i><FiPlus /></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-container footer-content">
                                <ul>
                                    <li><Link to="#">Men</Link></li>
                                    <li><Link to="#">Women</Link></li>
                                    <li><Link to="#">Accessories</Link></li>
                                    <li><Link to="#">Shoes</Link></li>
                                    <li><Link to="#">Denim</Link></li>
                                    <li><Link to="#">Dress</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="top-container">
                                <div className="logo-container">
                                    <div className="media-large">
                                        <h5>Information</h5>
                                    </div>
                                    <div className="media-small">
                                        <span>Information</span>
                                        <i><FiPlus /></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-container footer-content">
                                <ul>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Return & Exchanges</Link></li>
                                    <li><Link to="#">Shipping & Delivery</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="top-container">
                                <div className="logo-container">
                                    <div className="media-large">
                                        <h5>Useful Links</h5>
                                    </div>
                                    <div className="media-small">
                                        <span>Useful Links</span>
                                        <i><FiPlus /></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-container footer-content">
                                <ul>
                                    <li><Link to="#">Store Location</Link></li>
                                    <li><Link to="#">Latest News</Link></li>
                                    <li><Link to="#">My Account</Link></li>
                                    <li><Link to="#">Size Guide</Link></li>
                                    <li><Link to="#">FAQs 2</Link></li>
                                    <li><Link to="#">FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="top-container">
                                <div className="logo-container">
                                    <div className="media-large">
                                        <h5>Newsletter signup</h5>
                                    </div>
                                    <div className="media-small">
                                        <span>Newsletter sign up</span>
                                        <i><FiPlus /></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-container footer-content">
                                <p>Subscribe to our newLetter and get 10% off your first purchase</p>
                                <div className="form-container">
                                    <form>
                                        <input type="email" />
                                        <button>Subscribe</button>
                                    </form>
                                </div>
                                <div className="img-container">
                                    <img src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/payment2_3771ea04-fdc1-47f9-8536-84ec37d21957_360x.png?v=1585640412" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-container copyright">

                </div>
            </footer>
        </div>
    )
}

export default Footer
