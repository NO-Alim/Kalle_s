import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './scss/Categories.scss'

const Categories = () => {
    const location = useHistory();

    return (
        <div className="section-container">
            <div className="categories">
                <div className="grid-sec">
                    <div className="left-container grid-item single-grid">
                    </div>
                    <button className="btn-white" onClick={() => location.push('/shop/all')}>Women</button>
                </div>
                <div className="right-container grid-item">
                    <div className="grid-one">
                        <div className="grid-sec">
                            <div className="top grid-item single-grid">
                            </div>
                            <button className="btn-white" onClick={() => location.push('/shop/all')}>Acessories</button>
                        </div>
                        <div className="grid-sec">
                            <div className="bottom grid-item single-grid">
                            </div>
                            <button className="btn-white" onClick={() => location.push('/shop/all')}>Footwear</button>
                        </div>
                        
                    </div>
                    <div className="grid-sec">
                        <div className="grid-two grid-item single-grid">
                        </div>
                        <button className="btn-white" onClick={() => location.push('/shop/all')}>Watches</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Categories
