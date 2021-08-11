import React from 'react'
import Slider from 'react-slick'
import Slick from 'react-slick'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
import img1 from '../img/model1.png'
import img2 from '../img/model2.png'
import './scss/Header.scss'
import zIndex from '@material-ui/core/styles/zIndex';

const Header = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    }
    return (
        <div>
            <Slider {...settings}>
                <div className="slick-div bg-sec">
                    <div className="slick-content">
                        <div className="img-container">
                            <Fade right>
                            <img src={img1} alt="" />
                            </Fade>
                        </div>
                        <Fade left>
                        <div className="content">
                            <h3 className="h4 tx-cp bold">Summer 2021</h3>
                            <h1 className="heading bold">New arrival collection</h1>
                            <button className="btn-black">Explore Now</button>
                        </div>
                        </Fade>
                    </div>
                </div>
                <div className="slick-div bg-sec">
                    <div className="slick-content">
                        <div className="img-container">
                            <Fade right>
                            <img src={img2} alt="" />
                            </Fade>
                        </div>
                        <Fade left>
                        <div className="content">
                            <h3 className="h4 tx-cp bold">Summer 2021</h3>
                            <h1 className="heading bold">New arrival collection</h1>
                            <button className="btn-black">Explore Now</button>
                        </div>
                        </Fade>
                    </div>
                </div>
                <div className="slick-div bg-sec">
                    <div className="slick-content">
                        <div className="img-container">
                            <Fade right>
                            <img src={img1} alt="" />
                            </Fade>
                        </div>
                        <Fade left>
                        <div className="content">
                            <h3 className="h4 tx-cp bold">Summer 2021</h3>
                            <h1 className="heading bold">New arrival collection</h1>
                            <button className="btn-black">Explore Now</button>
                        </div>
                        </Fade>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Header
