import React, { useState } from 'react'
import './scss/Categories.scss'

const Categories = () => {

    return (
        <div className="section-container">
            <div className="categories">
                <div className="grid-sec">
                    <div className="left-container grid-item single-grid">
                    </div>
                    <button className="btn-white">Women</button>
                </div>
                <div className="right-container grid-item">
                    <div className="grid-one">
                        <div className="grid-sec">
                            <div className="top grid-item single-grid">
                            </div>
                            <button className="btn-white">Acessories</button>
                        </div>
                        <div className="grid-sec">
                            <div className="bottom grid-item single-grid">
                            </div>
                            <button className="btn-white">Footwear</button>
                        </div>
                        
                    </div>
                    <div className="grid-sec">
                        <div className="grid-two grid-item single-grid">
                        </div>
                        <button className="btn-white">Watches</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Categories
