import React from 'react'
import './scss/Categories.scss'

const Categories = () => {
    return (
        <div className="section-container">
            <div className="categories">
                <div className="left">
                    <div className="img-container">
                        <button className="btn-white">Women</button>
                    </div>
                </div>
                <div className="right">
                    <div className="right-left">
                        <div className="img-container top">
                            <button className="btn-white">Acessories</button>
                        </div>
                        <div className="img-container bottom">
                            <button className="btn-white">Footwear</button>
                        </div>
                    </div>
                    <div className="right-right">
                        <div className="img-container">
                            <button className="btn-white">Watches</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
