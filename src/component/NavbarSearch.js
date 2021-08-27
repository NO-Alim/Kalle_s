import React from 'react'
import {FiSearch} from 'react-icons/fi'
import { useGlobalContext } from '../context'
import './scss/NavbarSearch.scss'

const NavbarSearch = () => {
    const {products} = useGlobalContext();
    return (
        <div className="navbarSearch">
            <div className="from-container">
                <form>
                    <input type="text" />
                    <button><FiSearch /></button>
                </form>
            </div>
            <div className="result-container">
                <strong>Search Result: </strong>
                <div className="search-result">
                    <span>No product were found matching your selection.</span>
                    <div className="result">
                        {products.map((item,ind) => {
                            return(
                                <div className="item" key={ind}>
                                    <div className="img-container">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="content">
                                        <span className="name">item name</span>
                                        <span className="price">{item.price}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarSearch
