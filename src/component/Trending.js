import React from 'react'
import Slider from 'react-slick'
import { useGlobalContext } from '../context';
import {FiHeart,FiShoppingCart} from 'react-icons/fi'
import {BiShow} from 'react-icons/bi'
import './scss/Trending.scss'

const Trending = () => {
    const {products,loading} = useGlobalContext();
        console.log(products);
    const SampleNextArrow = (props) =>{
        const {className, style , onClick} = props;
        return (
            <div className={`Slick-arrow next-arrow ${className}`}
            style={{...style, display: 'block'}}
            onClick={onClick} />
        );
    }

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
                                            <div className="img-container" style={{backgroundImage: `url('${item.image}')`}}>
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
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="name">{item.category}</h5>
                                                <span className="price">$234</span>
                                                
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
