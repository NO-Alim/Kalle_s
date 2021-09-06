import React,{useState,useEffect, useRef} from 'react'
import {FaRegHeart} from 'react-icons/fa'
import {FiPlus,FiShoppingCart} from 'react-icons/fi'
import {BiShow} from 'react-icons/bi'
import { useGlobalContext } from '../context'
import { useHistory } from 'react-router-dom'
import './scss/ShopLook.scss'

const ShopLook = () => {
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
            <div className="shop-look">
                {/* <div className="shop-title">
                    <h3 className="h3">Shop The Look</h3>
                </div> */}
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
    )
}

export default ShopLook
