import React from 'react'
import {FiHeart,FiShoppingCart} from 'react-icons/fi'
import {FaRegHeart, FaHeart} from 'react-icons/fa'
import {BiShow} from 'react-icons/bi'
import './scss/Campaign.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../context'
import { useHistory } from 'react-router-dom'

const img1 = 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p24-12_360x.jpg?v=1581557817'
const img2 = 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p24-11_1080x.jpg?v=1581557817'
const Campaign = () => {
    const [imgTwoActive, setImgTwoActive] = useState(img2)
    const {toggleAddCartModal,handleWishList,cartLoading} = useGlobalContext();
    const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem('wishList')));
    const today = new Date().getTime();
    const launchDate = new Date('dec 31, 2021 13:00:00').getTime();
    const [distance, setDistance] = useState(launchDate - today);

    const [days, setDays] = useState(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const [hr,setHr] = useState(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const [mins, setMins] = useState(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const [sec, setSec] = useState(0);

    const location = useHistory();


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


    useEffect(() => {
        setWishList(JSON.parse(localStorage.getItem('wishList')));
    },[cartLoading])

    return (
        <div className="section-container">
            <div className="campaign">
                <div className="grid-container">
                    <div className="grid-item" onClick={() => location.push('/shop/all')}>
                        <div className="img-container" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/files/7492627-1-blue_1080x.jpg?v=1582026613')`}}>
                            <div className="content">
                                <h5>VIEW COLLECTIONS</h5>
                                <h2 className="h2">LOOKBOOK</h2>
                                <span className="span">Your world fo fashion in numbers</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item grid-item-two campaign-grid-two">
                        <div className="item-container">
                            <div className="img-container trending-img-container" onMouseOver={() => setImgTwoActive(img1)} onMouseOut={() => setImgTwoActive(img2)}>
                                <div className="img"  style={{backgroundImage: `url('${imgTwoActive}')`}}></div>
                                <div className="img-content" onClick={() => location.push(`/product/${5}`)}>
                                </div>
                                <div className="small-btn">
                                    <div className="btn-group">
                                        <button className="btn-white" onClick={() => location.push(`/product/${5}`)}><BiShow /></button>
                                        <button className="btn-white" onClick={() => toggleAddCartModal(5)}><FiShoppingCart /></button>
                                    </div>
                                </div>
                                <div className="wishlist">
                                    <span className="wish-btn" onClick={() => handleWishList(5)}>{wishList && wishList.includes(5) ? <i style={{color: 'red'}}><FaHeart /> </i>: <i><FaRegHeart /></i>}</span>
                                    <span className="wish-tag">{wishList && wishList.includes(5) ? 'Remove to wishlist': 'add to wishlist'}</span>
                                </div>
                                <div className="item-content">
                                <h5 className="name" onClick={() => location.push(`/product/${5}`)}>Item name</h5>
                                <span className="price">$234</span>
                                <span className="secondary-price">$198</span>
                            </div>
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
                            </div>
                        </div>
                    </div>
                    <div className="grid-item" onClick={() => location.push('/shop/all')}>
                        <div className="img-container" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/files/13444047-1-greymarl_1080x.jpg?v=1582026960')`}}>
                            <div className="content-container">
                                <h4 className="h4">MEN COLLECTION</h4>
                                <h1 className="h1">SALE 70%</h1>
                                <button className="btn-white" onClick={() => location.push('/shop/all')}>
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


