import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Modal from 'react-modal';
import { useWindowWidth } from '@react-hook/window-size'
import { useState } from 'react'
import {AiOutlineCar} from 'react-icons/ai'
import {TiSupport} from 'react-icons/ti'
import {BsArrowReturnLeft} from 'react-icons/bs'
import {RiSecurePaymentLine,RiArrowDropRightLine} from 'react-icons/ri'
import {FaFacebookF,FaTwitter,FaGooglePlusG,FaLinkedinIn,FaPlay,FaTimes} from 'react-icons/fa'
import './scss/About.scss'

Modal.setAppElement("#root");
const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onlyWidth = useWindowWidth();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div className="about-container section-container">
            <div className="about-nav section-container">
                <h4 className="h4">About Us</h4>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <span><RiArrowDropRightLine /></span>
                    </li>
                    <li>
                        <Link to="/about" className="active">About Us</Link>
                    </li>
                </ul>
            </div>
            <div className="about-header section-container">
                <h1 className="h1">Welcome to Kalles</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore praesentium sapiente molestiae minus ipsum autem saepe aspernatur ratione nostrum! Voluptatem dolorum incidunt dolore temporibus earum reprehenderit similique unde, esse debitis.</p>
                <button className="btn-white">Contact us</button>
            </div>
            <div className="about-video-container">
                <div className="video-container">
                    <div className="img-container">
                        <span className="animation-pin"></span>
                        <button className="btn-white" onClick={() => toggleModal()}><FaPlay /></button>
                        <Modal
                        isOpen={isModalOpen}
                        onRequestClose={toggleModal}
                        contentLabel="My dialog" className="modal"
                        style={{
                            overlay: {
                            backgroundColor: 'rgba(109, 109, 109,0.4)',
                            zIndex: '100'
                            }
                        }}>
                            <div>
                                <div className="modal-content">
                                    <span className="modal-btn" onClick={() => toggleModal()}><FaTimes /></span>
                                    <ReactPlayer width={`${onlyWidth > 700 ? '640px' : '300px'}`} url='https://www.youtube.com/watch?v=TP4VQTUbypM' />
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
                <div className="choose-reason">
                    <h3 className="h3">Why choose Us?</h3>
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
            </div>

            <div className="team-member section-container">
                <h2 className="h2">TEAM MEMBER</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, possimus!</p>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="img-container">
                            <div className="img" style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2018/01/04/14/16/woman-3060784_960_720.jpg')`}}></div>
                            <div className="content">
                                <h4 className="h4">Aliya mari</h4>
                                <ul>
                                    <li><a href=""><FaFacebookF /></a></li>
                                    <li><a href=""><FaTwitter /></a></li>
                                    <li><a href=""><FaGooglePlusG /></a></li>
                                    <li><a href=""><FaLinkedinIn /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="img-container">
                            <div className="img" style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2018/03/20/06/47/people-3242369_960_720.jpg')`}}></div>
                            <div className="content">
                                <h4 className="h4">Aliya mari</h4>
                                <ul>
                                    <li><a href=""><FaFacebookF /></a></li>
                                    <li><a href=""><FaTwitter /></a></li>
                                    <li><a href=""><FaGooglePlusG /></a></li>
                                    <li><a href=""><FaLinkedinIn /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="img-container">
                            <div className="img" style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2014/08/20/07/58/girl-422333_960_720.jpg')`}}></div>
                            <div className="content">
                                <h4 className="h4">Aliya mari</h4>
                                <ul>
                                    <li><a href=""><FaFacebookF /></a></li>
                                    <li><a href=""><FaTwitter /></a></li>
                                    <li><a href=""><FaGooglePlusG /></a></li>
                                    <li><a href=""><FaLinkedinIn /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About