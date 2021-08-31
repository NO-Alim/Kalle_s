import React from 'react'
import Slider from 'react-slick'
import {FiHeart,FiShoppingCart} from 'react-icons/fi'
import {BiShow} from 'react-icons/bi'
import './scss/Blog.scss'
import './scss/Trending.scss'
import { useHistory } from 'react-router-dom'

const Blog = () => {
    const location = useHistory();
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
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
            },
            {
              breakpoint: 850,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
            },
            {
              breakpoint: 500,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
            }
        ]
        
    }
    return (
        <div className="section-container">
            <div className="Blog-container">
                <h2 className="title">LATES BLOG</h2>
                <h4 className="sub-title">The freshest and most exciting news.</h4>

                <div className="slick-carousel">
                    <div className="slick-container">
                        <Slider {...settings}>
                            <div className="slick-item">
                                <div className="img-container" onClick={() => location.push('/singleblog')}>
                                    <div className="img" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/1_540x.jpg?v=1581524880')`}}>

                                    </div>
                                </div>
                                <div className="blog-content">
                                    <strong onClick={() => location.push('/singleblog')}>101 Beauty Tips Every Girl Should Know</strong>
                                    <p className="admin-sec">By <span>admin</span> on <span>April 7, 2020</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime beatae velit ducimus nulla quisquam. Accusamus maxime aut alias modi.</p>
                                </div>
                            </div>
                            <div className="slick-item">
                                <div className="img-container" onClick={() => location.push('/singleblog')}>
                                    <div className="img" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/street-style-girl3_540x.jpg?v=1586139309')`}}>

                                    </div>
                                </div>
                                <div className="blog-content">
                                    <strong onClick={() => location.push('/singleblog')}>The Easiest Way to Break Out on Top</strong>
                                    <p className="admin-sec">By <span>admin</span> on <span>April 7, 2020</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime beatae velit ducimus nulla quisquam. Accusamus maxime aut alias modi.</p>
                                </div>
                            </div>
                            <div className="slick-item">
                                <div className="img-container" onClick={() => location.push('/singleblog')}>
                                    <div className="img" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/couple_540x.jpg?v=1586139452')`}}>

                                    </div>
                                </div>
                                <div className="blog-content">
                                    <strong onClick={() => location.push('/singleblog')}>Style for couple in Weeding season</strong>
                                    <p className="admin-sec">By <span>admin</span> on <span>April 7, 2020</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime beatae velit ducimus nulla quisquam. Accusamus maxime aut alias modi.</p>
                                </div>
                            </div>
                            <div className="slick-item">
                                <div className="img-container" onClick={() => location.push('/singleblog')}>
                                    <div className="img" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/street-style-girl3_540x.jpg?v=1586139309')`}}>

                                    </div>
                                </div>
                                <div className="blog-content">
                                    <strong onClick={() => location.push('/singleblog')}>101 Beauty Tips Every Girl Should Know</strong>
                                    <p className="admin-sec">By <span>admin</span> on <span>April 7, 2020</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime beatae velit ducimus nulla quisquam. Accusamus maxime aut alias modi.</p>
                                </div>
                            </div>
                            <div className="slick-item">
                                <div className="img-container" onClick={() => location.push('/singleblog')}>
                                    <div className="img" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/street-style-girl3_540x.jpg?v=1586139309')`}}>

                                    </div>
                                </div>
                                <div className="blog-content">
                                    <strong onClick={() => location.push('/singleblog')}>101 Beauty Tips Every Girl Should Know</strong>
                                    <p className="admin-sec">By <span>admin</span> on <span>April 7, 2020</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime beatae velit ducimus nulla quisquam. Accusamus maxime aut alias modi.</p>
                                </div>
                            </div>
                            <div className="slick-item">
                                <div className="img-container" onClick={() => location.push('/singleblog')}>
                                    <div className="img" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/street-style-girl3_540x.jpg?v=1586139309')`}}>

                                    </div>
                                </div>
                                <div className="blog-content">
                                    <strong onClick={() => location.push('/singleblog')}>101 Beauty Tips Every Girl Should Know</strong>
                                    <p className="admin-sec">By <span>admin</span> on <span>April 7, 2020</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime beatae velit ducimus nulla quisquam. Accusamus maxime aut alias modi.</p>
                                </div>
                            </div>
                            <div className="slick-item">
                                <div className="img-container" onClick={() => location.push('/singleblog')}>
                                    <div className="img" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/street-style-girl3_540x.jpg?v=1586139309')`}}>

                                    </div>
                                </div>
                                <div className="blog-content">
                                    <strong onClick={() => location.push('/singleblog')}>101 Beauty Tips Every Girl Should Know</strong>
                                    <p className="admin-sec">By <span>admin</span> on <span>April 7, 2020</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime beatae velit ducimus nulla quisquam. Accusamus maxime aut alias modi.</p>
                                </div>
                            </div>
                            <div className="slick-item">
                                <div className="img-container" onClick={() => location.push('/singleblog')}>
                                    <div className="img" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/couple_540x.jpg?v=1586139452')`}}>

                                    </div>
                                </div>
                                <div className="blog-content">
                                    <strong onClick={() => location.push('/singleblog')}>101 Beauty Tips Every Girl Should Know</strong>
                                    <p className="admin-sec">By <span>admin</span> on <span>April 7, 2020</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime beatae velit ducimus nulla quisquam. Accusamus maxime aut alias modi.</p>
                                </div>
                            </div>
                            <div className="slick-item">
                                <div className="img-container" onClick={() => location.push('/singleblog')}>
                                    <div className="img" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/couple_540x.jpg?v=1586139452`}}>

                                    </div>
                                </div>
                                <div className="blog-content">
                                    <strong onClick={() => location.push('/singleblog')}>101 Beauty Tips Every Girl Should Know</strong>
                                    <p className="admin-sec">By <span>admin</span> on <span>April 7, 2020</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime beatae velit ducimus nulla quisquam. Accusamus maxime aut alias modi.</p>
                                </div>
                            </div>
                            <div className="slick-item">
                                <div className="img-container" onClick={() => location.push('/singleblog')}>
                                    <div className="img" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/couple_540x.jpg?v=1586139452')`}}>

                                    </div>
                                </div>
                                <div className="blog-content">
                                    <strong onClick={() => location.push('/singleblog')}>101 Beauty Tips Every Girl Should Know</strong>
                                    <p className="admin-sec">By <span>admin</span> on <span>April 7, 2020</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime beatae velit ducimus nulla quisquam. Accusamus maxime aut alias modi.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
