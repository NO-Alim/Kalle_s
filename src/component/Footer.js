import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterestP} from 'react-icons/fa'
import {FiPlus,FiMinus,FiMapPin,FiPhone} from 'react-icons/fi'
import {BiEnvelope} from 'react-icons/bi'
import { useWindowWidth } from '@react-hook/window-size'
import './scss/Footer.scss'
import { useEffect } from 'react'

const Footer = () => {
    const [touchActive, setTouchActive] = useState(true);
    const [categoriesActive, setCategoriesActive] = useState(false);
    const [informationActive, setInformationActive] = useState(false);
    const [linksActive, setLinksActive] = useState(false);
    const [newsletter, setNewsletter] = useState(false)
    const width = useWindowWidth();
    
    useEffect(() => {
        if(width > 550){
            setTouchActive(true);
            setCategoriesActive(true);
            setInformationActive(true);
            setLinksActive(true);
            setNewsletter(true);
        }  
    },[width])
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
                                        <i onClick={() => setTouchActive(!touchActive)}>{touchActive? <FiMinus />:<FiPlus />}</i>
                                    </div>
                                </div>
                            </div>
                            <div className={`bottom-container footer-content ${touchActive ? 'active' : null}`}>
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
                                <div className="sub-sec social-container">
                                    <ul>
                                        <li>
                                            <span className="media-name">Follow on facebook</span>
                                            <Link className="media-link" to="#"><FaFacebookF /></Link>
                                        </li>
                                        <li>
                                            <span className="media-name">Follow on Twitter</span>
                                            <Link className="media-link" to="#"><FaTwitter /></Link>
                                        </li>
                                        <li>
                                            <span className="media-name">Follow on Instagram</span>
                                            <Link className="media-link" to="#"><FaInstagram /></Link>
                                        </li>
                                        <li>
                                            <span className="media-name">Follow on Linkedin</span>
                                            <Link className="media-link" to="#"><FaLinkedinIn /></Link>
                                        </li>
                                        <li>
                                            <span className="media-name">Follow on Pinterest</span>
                                            <Link className="media-link" to="#"><FaPinterestP /></Link>
                                        </li>
                                    </ul>
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
                                        <i onClick={() => setCategoriesActive(!categoriesActive)}>{categoriesActive? <FiMinus />:<FiPlus />}</i>
                                    </div>
                                </div>
                            </div>
                            <div className={`bottom-container footer-content ${categoriesActive ? 'active' : null}`}>
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
                                        <i onClick={() => setInformationActive(!informationActive)}>{informationActive? <FiMinus />:<FiPlus />}</i>
                                    </div>
                                </div>
                            </div>
                            <div className={`bottom-container footer-content ${informationActive ? 'active' : null}`}>
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
                                        <i onClick={() => setLinksActive(!linksActive)}>{linksActive? <FiMinus />:<FiPlus />}</i>
                                    </div>
                                </div>
                            </div>
                            <div className={`bottom-container footer-content ${linksActive ? 'active' : null}`}>
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
                                        <i onClick={() => setNewsletter(!newsletter)}>{newsletter? <FiMinus />:<FiPlus />}</i>
                                    </div>
                                </div>
                            </div>
                            <div className={`bottom-container footer-content ${newsletter ? 'active' : null}`}>
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
                <div className="footer-bottom">
                    <div className="copyright">
                        <p>Copyright &copy; 2021 <span>Kalles</span> all rights reserved.</p>
                        <ul>
                            <li><Link to="#">shop</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">contact</Link></li>
                            <li><Link to="#">blog</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
