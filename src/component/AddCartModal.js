import React from 'react'
import './scss/AddCartModal.scss'
import Modal from 'react-modal';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';
import {FaTimes,FaPlus,FaMinus,FaArrowRight} from 'react-icons/fa'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

Modal.setAppElement("#root");
const AddCartModal = () => {
    const {toggleAddCartModal,addCartModal,addCartId,products,count, setCount,handleDecrease,handleCart} = useGlobalContext();
    const location = useHistory();
    const selectedProduct = (products.filter(item => item.id === addCartId))
    
    useEffect(() => {
        if (addCartModal) {
            document.body.style.overflow = 'hidden';
        } else{
            document.body.style.overflow = 'unset';
        }
        setCount(1)
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
            <div className="modal-content-container">
                {selectedProduct.map((item,ind) => {
                    return(
                        <div key={ind}>
                            <div className="close-container">
                                <span onClick={() => toggleAddCartModal()}><FaTimes /></span>
                            </div>
                            <div className="modal-top-container">
                                <div className="img-carousel-container">
                                    <div className="img-container">
                                        <img src={item.image} alt="" />
                                    </div>
                                </div>
                                <div className="top-content">
                                    <div className="name">
                                        <span>{((item.title).replace(/^(.{30}[^\s]*).*/, "$1") +"\n")}...</span>
                                    </div>
                                    <div className="price-container">
                                        <span className="primary-price">${item.price}</span>
                                        <span className="secondary-price">${item.price}</span>
                                        <span style={{color: 'red'}} className="discount-price">${item.price}</span>
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
                                        <span className="counter-btn" onClick={() => handleDecrease()}><FaMinus /></span>
                                        <input type="number" value={count} onChange={(e) => setCount(e.target.value)}/>
                                        <span className="counter-btn" onClick={() => setCount(count + 1)}><FaPlus /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="button-container">
                                <button className="btn-black" onClick={() => {handleCart(addCartId,count);toggleAddCartModal()}}>Add To Cart</button>
                                <span onClick={() => {location.push(`/product/${addCartId}`);toggleAddCartModal()}}>View full details <i><FaArrowRight /></i></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Modal>
    )
}

export default AddCartModal
