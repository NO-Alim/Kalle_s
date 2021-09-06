import React from 'react'
import './scss/SingleBlog.scss'
import {FaRegHeart} from 'react-icons/fa'
import {FiPlus,FiShoppingCart} from 'react-icons/fi'
import {BiShow} from 'react-icons/bi'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../context'



//https://cdn.pixabay.com/photo/2015/07/02/10/18/jeans-828693_960_720.jpg
const SingleBlog = () => {
    const {toggleAddCartModal,handleWishList} = useGlobalContext();
    const [active, setActive] = useState('');
    const pinDivOneRef = useRef(null);
    const pinDivTwoRef = useRef(null);
    const location = useHistory();

    const handleClick = (e) => {
        if (!pinDivOneRef.current.contains(e.target) && !pinDivTwoRef.current.contains(e.target)) {
            setActive('')
        }
    }

    useEffect(() =>{
        document.addEventListener('click', handleClick);
        return () =>{
            document.removeEventListener('click', handleClick);
        }
    })
    return (
        <div>
            <div className="singleBlog-header">
                <div className="content">
                    <h4 className="h4">THE EASIEST WAY TO BREAK OUT ON TOP</h4>
                    <span className="date">April 6, 2020</span>
                    <p>In Life Style 4 comments</p>
                </div>
            </div>
            <div className="blog-content section-container">
                <div className="top-container">
                    <p>Typography is the work of <i className="special-font">typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists,</i> and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical <i className="strong">workers and newsletter writers to anyone self-publishing materials.</i></p>
                </div>
                <div className="img-container">
                    <div className="img" style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2018/12/05/13/41/woman-3857758_960_720.jpg')`}}></div>
                    <div className="img" style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2015/07/02/10/35/watch-828848_960_720.jpg')`}}></div>
                    <div className="img" style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/22/19/02/bag-1850053_960_720.jpg')`}}></div>
                    <div className="img" style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/25/16/27/woman-1858727_960_720.jpg')`}}></div>
                    <div className="img" style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg')`}}></div>
                    <div className="img" style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2017/07/31/19/05/people-2560084_960_720.jpg')`}}></div>
                </div>
                <div className="quot">
                    <p><i>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</i></p>
                </div>
                <div className="shop-look">
                    <div className="shop-title">
                        <h3 className="h3">Shop The Look</h3>
                    </div>
                    <div className="img">
                        <div className={`pin-div one ${active === 'one' ? 'active' : null}`} onClick={() => setActive('one')} ref={pinDivOneRef}>
                            <span className="plus"><FiPlus /></span>
                            <span className="lazy-pin"></span>
                            
                            <div className="selected-product-container">
                                <div className="selected-img">
                                    <img src="https://cdn.pixabay.com/photo/2018/07/28/09/23/woman-3567600_960_720.jpg" alt="" />
                                </div>
                                <div className="small-btn">
                                    <div className="btn-group">
                                        <button className="btn-white" onClick={() => location.push(`/product/3`)}><BiShow /></button>
                                        <button className="btn-white" onClick={() => toggleAddCartModal(3)}><FiShoppingCart /></button>
                                        <button className="btn-white" onClick={() => handleWishList(3)}><FaRegHeart /></button>
                                    </div>
                                </div>
                                <div className="name-container">
                                    <h4 className='h4'>Item Name</h4>
                                </div>
                            </div>


                        </div>

                        <div className={`pin-div two ${active === 'two' ? 'active' : null}`} onClick={() => setActive('two')} ref={pinDivTwoRef}>
                            <span className="plus"><FiPlus /></span>
                            <span className="lazy-pin"></span>

                            <div className="selected-product-container">
                                <div className="selected-img">
                                    <img src="https://cdn.pixabay.com/photo/2016/06/17/09/54/woman-1462985_960_720.jpg" alt="" />
                                </div>
                                <div className="small-btn">
                                    <div className="btn-group">
                                        <button className="btn-white" onClick={() => location.push(`/product/8`)}><BiShow /></button>
                                        <button className="btn-white" onClick={() => toggleAddCartModal(8)}><FiShoppingCart /></button>
                                        <button className="btn-white" onClick={() => handleWishList(8)}><FaRegHeart /></button>
                                    </div>
                                </div>
                                <div className="name-container">
                                    <h4 className="h4">Item Name</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
