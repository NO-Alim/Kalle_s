import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {RiArrowDropDownLine,RiArrowDropUpLine} from 'react-icons/ri'
import './Scss/ShopNav.scss'
import { useWindowWidth } from '@react-hook/window-size'

const ShopNav = () => {
    const width = useWindowWidth();
    const [accordion, setAccordion] = useState(false);

    useEffect(() => {
        if(width > 900){
            setAccordion(false)
        }
    },[width])
    return (
        <div>
            <div className="shopnav">
                <h5 className="nav-tag" onClick={() => setAccordion(!accordion)}>Categories <span>{accordion ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}</span></h5>
                <div className={`link-container ${accordion ? 'active' : null}`} >
                    <ul>
                        <li>
                            <NavLink exact to="/shop/all">All</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/shop/bottom">Bottom</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/shop/denim">Denim</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/shop/dress">Dress</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/shop/jackets">Jackets</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/shop/jewellry">Jewellry</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/shop/men">Men</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/shop/shoes">Shoes</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/shop/t-shirt">T-shirt</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/shop/tops">Tops</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/shop/women">Women</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShopNav
