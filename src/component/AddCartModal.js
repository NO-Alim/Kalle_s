import React from 'react'
import './scss/AddCartModal.scss'
import Modal from 'react-modal';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';
import {FaTimes,FaPlus,FaMinus,FaArrowRight} from 'react-icons/fa'

Modal.setAppElement("#root");
const AddCartModal = () => {
    const {toggleAddCartModal,addCartModal} = useGlobalContext();
    useEffect(() => {
        if (addCartModal) {
            document.body.style.overflow = 'hidden';
        } else{
            document.body.style.overflow = 'unset';
        }
    },[addCartModal])


    return (
        <Modal isOpen={addCartModal}
        onRequestClose={toggleAddCartModal}
        className="addCartModal"
        style={{
            overlay: {
            backgroundColor: 'rgba(109, 109, 109,0.4)'
            }
        }}>
            <div className="close-container">
                <span onClick={() => toggleAddCartModal()}><FaTimes /></span>
            </div>
            <div className="modal-top-container">
                <div className="img-carousel-container">
                    <div className="img-container">
                        <img src="https://cdn.pixabay.com/photo/2021/05/08/09/08/sunset-6237951_640.jpg" alt="" />
                    </div>
                </div>
                <div className="top-content">
                    <div className="name">
                        <span>Name of product</span>
                    </div>
                    <div className="price-container">
                        <span className="primary-price">$123</span>
                        <span className="secondary-price">$123</span>
                        <span style={{color: 'red'}} className="discount-price">$1233</span>
                        <span className="discount">-33%</span>
                    </div>
                </div>
            </div>
            <div className="color-count">
                <div className="color-container">
                    <span className="color-value">Color:pink</span>
                    <div className="colors">
                        <div className="single-color">
                            <span className="color" style={{backgroundColor:'pink'}}></span>
                            <span className="color-name">pink</span>
                        </div>
                        <div className="single-color">
                            <span className="color" style={{backgroundColor:'black'}}></span>
                            <span className="color-name">Black</span>
                        </div>
                    </div>
                </div>
                <div className="counter-container">
                    <div className="counter">
                        <span className="counter-btn"><FaMinus /></span>
                        <input type="number" value='1'/>
                        <span className="counter-btn"><FaPlus /></span>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="btn-black">Add To Cart</button>
                <span>View full details <i><FaArrowRight /></i></span>
            </div>
        </Modal>
    )
}

export default AddCartModal
