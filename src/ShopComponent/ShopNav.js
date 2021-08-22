import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {RiArrowDropDownLine,RiArrowDropUpLine} from 'react-icons/ri'
import './Scss/ShopNav.scss'
import { useWindowWidth } from '@react-hook/window-size'
import { useGlobalContext } from '../context'

const ShopNav = () => {
    const width = useWindowWidth();
    const {products} = useGlobalContext();
    const [accordion, setAccordion] = useState(false);

    const getUniqList = (arr,key) => {
        return [...new Map(arr.map(item => [item[key],item])).values()];
    }
    const AllCategories = getUniqList(products, 'category');

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
                        {AllCategories.map((item,ind) => {
                            return (
                                <li key={ind}>
                                    <NavLink exact to={`/shop/${item.category.toLowerCase()}`}>{item.category}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShopNav
