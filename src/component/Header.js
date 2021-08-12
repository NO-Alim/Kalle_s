import React from 'react'
import Slider from 'react-slick'
import Slick from 'react-slick'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
import img1 from '../img/model1.png'
import img2 from '../img/model2.png'
import img3 from '../img/model3.png'
import './scss/Header.scss'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

const Header = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

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
                <div className="slick-div bg-sec" >
                    <div className="slick-content" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                        <animated.div className="img-container" style={{ transform: props.xy.interpolate(trans1) }}>
                            <Fade right>
                            <img src={img1} alt="" />
                            </Fade>
                        </animated.div>
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
                    <div className="slick-content" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                        <animated.div className="img-container" style={{ transform: props.xy.interpolate(trans1) }}>
                            <Fade right>
                            <img src={img2} alt="" />
                            </Fade>
                        </animated.div>
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
                    <div className="slick-content" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                        <animated.div className="img-container" style={{ transform: props.xy.interpolate(trans1) }}>
                            <Fade right>
                            <img src={img3} alt="" />
                            </Fade>
                        </animated.div>
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
