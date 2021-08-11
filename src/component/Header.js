import React from 'react'
import Slider from 'react-slick'
import Slick from 'react-slick'
import Zoom from 'react-reveal/Zoom';
import './scss/Header.scss'

const Header = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }
    return (
        <div>
            <Slider {...settings}>
                <div className="slick-div bg-sec">
                    <div className="slick-content">
                        <div className="img-container">
                            <img src="" alt="" />
                        </div>
                        <Zoom>
                        <div className="content">
                            <h3 className="h4 tx-cp bold">Summer 2021</h3>
                            <h1 className="heading bold">New arrival collection</h1>
                            <button className="btn-black">Explore Now</button>
                        </div>
                        </Zoom>
                    </div>
                </div>
                <div className="slick-div bg-sec">
                    <div className="slick-content">
                        <div className="img-container">
                            <img src="" alt="" />
                        </div>
                        <Zoom>
                        <div className="content">
                            <h3 className="h4 tx-cp bold">Summer 2021</h3>
                            <h1 className="heading bold">New arrival collection</h1>
                            <button className="btn-black">Explore Now</button>
                        </div>
                        </Zoom>
                    </div>
                </div>
                <div className="slick-div bg-sec">
                    <div className="slick-content">
                        <div className="img-container">
                            <img src="" alt="" />
                        </div>
                        <Zoom>
                        <div className="content">
                            <h3 className="h4 tx-cp bold">Summer 2021</h3>
                            <h1 className="heading bold">New arrival collection</h1>
                            <button className="btn-black">Explore Now</button>
                        </div>
                        </Zoom>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Header
