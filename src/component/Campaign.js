import React from 'react'
import {FiHeart,FiShoppingCart} from 'react-icons/fi'
import {BiShow} from 'react-icons/bi'
import './scss/Campaign.scss'
import { useEffect } from 'react'
import { useState } from 'react'
const Campaign = () => {
    const today = new Date().getTime();
    const launchDate = new Date('dec 31, 2021 13:00:00').getTime();
    const [distance, setDistance] = useState(launchDate - today);

    const [days, setDays] = useState(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const [hr,setHr] = useState(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const [mins, setMins] = useState(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const [sec, setSec] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
            setHr(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            setMins(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
            setSec(Math.floor((distance % (1000 * 60)) / 1000));
            setDistance(launchDate - today)
        },1000);
        return () => clearInterval(interval);
    },[sec,distance])
    return (
        <div className="section-container">
            <div className="campaign">
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="img-container" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/files/7492627-1-blue_1080x.jpg?v=1582026613')`}}>
                            <div className="content">
                                <h5>VIEW COLLECTIONS</h5>
                                <h2 className="h2">LOOKBOOK</h2>
                                <span className="span">Your world fo fashion in numbers</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="img-container" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p24-11_1080x.jpg?v=1581557817')`}}>
                            <span className="discount">-30%</span>
                            {distance < 0 ? <h2 className="h3 times-up">opps!!! Times Up</h2> : <div className="timers">
                                <div className="timer day">
                                    <span className="number">{days}</span>
                                    <span className="text">days</span>
                                </div>
                                <div className="timer hr">
                                    <span className="number">{hr}</span>
                                    <span className="text">hr</span>
                                </div>
                                <div className="timer min">
                                    <span className="number">{mins}</span>
                                    <span className="text">min</span>
                                </div>
                                <div className="timer sec">
                                    <span className="number">{sec}</span>
                                    <span className="text">sec</span>
                                </div>
                            </div>}
                            
                            <div className="img-content">
                                <div className="wishlist">
                                    <span className="wish-btn"><FiHeart /></span>
                                    <span className="wish-tag">Add to Wishlist</span>
                                </div>
                                <div className="btn-container">
                                    <div className="view-btns">
                                        <button className="btn-white">Quick View</button>
                                        <button className="btn-black"><BiShow /></button>
                                    </div>
                                    <div className="shop-btns">
                                        <button className="btn-white">Quick Shop</button>
                                        <button className="btn-black"><FiShoppingCart /></button>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h5 className="name">Item name</h5>
                                    <span className="price">$234</span>
                                    <span className="secondary-price">$198</span>
                                    
                                    <div className="color-container">
                                        <div className="colors">
                                            <div className="single-color">
                                                <span className="color" style={{backgroundColor:'pink'}}></span>
                                                <span className="color-name">pink</span>
                                            </div>
                                            <div className="single-color">
                                                <span className="color" style={{backgroundColor:'black'}}></span>
                                                <span className="color-name">Black</span>
                                            </div>
                                            <div className="single-color">
                                                <span className="color" style={{backgroundColor:'Grey'}}></span>
                                                <span className="color-name">Grey</span>
                                            </div>
                                            <div className="single-color">
                                                <span className="color" style={{backgroundColor:'blue'}}></span>
                                                <span className="color-name">Blue</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="img-container" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/files/13444047-1-greymarl_1080x.jpg?v=1582026960')`}}>
                            <div className="content-container">
                                <h4 className="h4">MEN COLLECTION</h4>
                                <h1 className="h1">SALE 70%</h1>
                                <button className="btn-white">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaign
