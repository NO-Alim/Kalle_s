import React from 'react'
import './scss/Categories.scss'

const Categories = () => {
    return (
        <div className="section-container">
            <div className="categories">
                <div className="left">
                    <div className="img-container">
                        <button className="btn-white">Women</button>
                        <img src="https://cdn.pixabay.com/photo/2018/01/02/09/47/woman-3055841_960_720.jpg" alt="" className="img"/>
                    </div>
                </div>
                <div className="right">
                    <div className="right-right">
                        <div className="img-container">
                            <button className="btn-white">Women</button>
                            <img src="https://cdn.pixabay.com/photo/2017/04/22/11/17/handbags-2251086_960_720.jpg" alt="" className="img" />
                        </div>
                        <div className="img-container">
                            <button className="btn-white">Women</button>
                            <img src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" alt="" className="img" />
                        </div>
                    </div>
                    <div className="right-left">
                        <div className="img-container">
                            <button className="btn-white">Women</button>
                            <img src="https://cdn.pixabay.com/photo/2016/02/04/08/54/pocket-watch-1178772_960_720.jpg" alt="" className="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
