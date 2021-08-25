import React,{useEffect, useState} from 'react'
import Slider from 'react-slick'
import { useGlobalContext } from '../context';
import {FiHeart,FiShoppingCart} from 'react-icons/fi'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import {BiShow} from 'react-icons/bi'
import './scss/Trending.scss'
import { useHistory } from 'react-router-dom';

const Trending = () => {
    const {products,loading,toggleAddCartModal,handleWishList,cartLoading} = useGlobalContext();
    const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem('wishList')));
    const location = useHistory();
    const SampleNextArrow = (props) =>{
        const {className, style , onClick} = props;
        return (
            <div className={`Slick-arrow next-arrow ${className}`}
            style={{...style, display: 'block'}}
            onClick={onClick} />
        );
    }

    useEffect(() => {
        setWishList(JSON.parse(localStorage.getItem('wishList')));
    },[cartLoading])

    const SamplePrevArrow = (props) => {
        const { className, style, onClick} = props;

        return(
            <div className={`Slick-arrow prev-arrow ${className}`}
            style={{...style, display: 'block'}}
            onClick={onClick} />
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
              }
            },
            {
              breakpoint: 960,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
            },
            {
              breakpoint: 724,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
            },
            {
              breakpoint: 440,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
            }
        ]
        
    }
    
    if (loading) {
        return(
            <h1>Loading</h1>
        )
    }
    return (
        <div className="section-container trending">
            <div className="content">
                <h2 className="title">TRENDING</h2>
                <h4 className="sub-title">Top View in this week.</h4>

                <div className="slick-carousel">
                    <div className="slick-container">
                        <Slider {...settings}>
                            {products.map((item,ind) => {
                                return(
                                    <div className="slick-item" key={ind}>
                                        <div className="item-container">
                                            <div className="img-container trending-img-container">
                                                <div className="img"  style={{backgroundImage: `url('${item.image}')`}}></div>
                                                <div className="img-content" onClick={() => location.push(`/product/${item.id}`)}>
                                                    
                                                </div>
                                                <div className="small-btn">
                                                    <div className="btn-group">
                                                        <button className="btn-white" onClick={() => location.push(`/product/${item.id}`)}><BiShow /></button>
                                                        <button className="btn-white" onClick={() => toggleAddCartModal(item.id)}><FiShoppingCart /></button>
                                                    </div>
                                                </div>
                                                <div className="wishlist">
                                                    <span className="wish-btn" onClick={() => handleWishList(item.id)}>{wishList && wishList.includes(item.id) ? <i style={{color: 'red'}}><FaHeart /> </i>: <i><FaRegHeart /></i>}</span>
                                                    <span className="wish-tag">{wishList && wishList.includes(item.id) ? 'Remove wishlist': 'add wishlist'}</span>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="name">{item.category}</h5>
                                                <span className="price">${item.price}</span>
                                                
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
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending
