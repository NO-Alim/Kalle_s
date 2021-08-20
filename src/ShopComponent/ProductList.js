import React, { useState } from 'react'
import {FaFilter} from 'react-icons/fa'
import {RiArrowDropDownLine,RiArrowDropUpLine} from 'react-icons/ri'
import {FiHeart,FiShoppingCart} from 'react-icons/fi'
import {BiShow} from 'react-icons/bi'
import { useGlobalContext } from '../context'
import { useWindowWidth } from '@react-hook/window-size'
import './Scss/ProductList.scss'
import { useEffect } from 'react'
import Select from 'react-select'

const options = [
    //{value: 'Selling', label: 'Featured'},
    {value: 'Best', label: 'Best selling'},
    {value: 'A-Z', label: 'A-z'},
    {value: 'Z-A', label: 'Z-A'},
    {value: 'Low', label: 'Price, low to high'},
    {value: 'High', label: 'Price, high to low'},

]

const customStyle = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'grey',
        //backgroundColor: 'red'
        width: 'auto'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        //display: 'none'
    }),
    control: () => ({
        display: 'flex',
        border: '1px solid rgb(109, 109, 109)',
        borderRadius: '30px'
    }),
    menu: (provided) => ({
        ...provided,
        width: '250px',
        right: '0'
    }) 
}
const ProductList = () => {
    const {products, loading, setLoading} = useGlobalContext();
    const [grid, setGrid] = useState(5);
    const width = useWindowWidth();

    const [productList, setProductList] = useState(products);
    const [selectedOption, setSelectedOption] = useState(null);


    const handleChange = (e) => {
        setSelectedOption(e);
    }

    useEffect(()=> {
        if (width >= 901 && width < 1100) {
            setGrid(4);
        }
        if (width > 769 && width <= 900) {
            setGrid(3)
        }
        if (width > 550 && width <= 768) {
            setGrid(2)
        }
        if (width < 400) {
            setGrid(1)

        }
    },[width]);

    useEffect(() => {
        if (selectedOption) {
            if (selectedOption.value.toLowerCase() === 'low') {
                setProductList(products.sort((a,b) => (a.price > b.price) ? 1 : -1));
            }
            if (selectedOption.value.toLowerCase() === 'high') {
                setProductList(products.sort((a,b) => (a.price < b.price) ? 1 : -1))
            }
            if (selectedOption.value.toLowerCase() === 'a-z') {
                setProductList(products.sort((a,b) => (a.category > b.category)*2-1));
            }

            if (selectedOption.value.toLowerCase() === 'z-a') {
                setProductList(products.sort((a,b) => (a.category < b.category)*2-1));
            }

            if (selectedOption.value.toLowerCase() === 'best') {
                setProductList(products);
            }
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        },500);
    },[selectedOption]);

    useEffect(() => {
        setProductList(products);
    },[products,loading,selectedOption])
    return (
        <div>
            <div className="productList section-container">
                <div className="top-container">
                    <div className="filter-sec">
                        <span className="filter-btn"><FaFilter /> Filter</span>
                    </div>
                    <div className="view">
                        <div className="grid-view">
                            <div className="grid-container">
                                <div className={`grid-item grid-item-one ${grid === 1 ? 'active' : null}`} onClick={() => setGrid(1)}>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                </div>
                                <div className={`grid-item grid-item-two ${grid === 2 ? 'active' : null}`} onClick={() => setGrid(2)}>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                </div>
                                <div className={`grid-item grid-item-three ${grid === 3 ? 'active' : null}`} onClick={() => setGrid(3)}>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                </div>
                                <div className={`grid-item grid-item-four ${grid === 4 ? 'active' : null}`} onClick={() => setGrid(4)}>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                </div>
                                <div className={`grid-item grid-item-five ${grid === 5 ? 'active' : null}`} onClick={() => setGrid(5)}>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sort">
                        <Select menuPlacement="auto" menuPosition="fixed" dropdownIndicator="none" className="custom-select" styles={customStyle} options={options} placeholder="sort"
                        value={selectedOption} onChange={(e) => handleChange(e)}/>
                        {/* <div className="sort-btn-container">
                            <p className="sort-btn">sort<span><RiArrowDropDownLine /></span></p>
                        </div> */}
                    </div>
                </div>

                <div className='products-container mr-top-bottom-5'>
                    {loading ? <h2>loading.....</h2> : <div className={`product-grid-container product-grid-container${grid}`} style={{gridTemplateColumns: `repeat(${grid}, 1fr)`}}>
                        {products.map((item,ind) =>{
                            return(
                                <div className={`product-item product-item${ind}`} key={ind}>
                                    <div className="item-container">
                                        <div className="img-container trending-img-container" style={{backgroundImage: `url('${item.image}')`}}>
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
                                            <div className="small-btn">
                                                <div className="btn-group">
                                                    <button className="btn-white"><BiShow /></button>
                                                    <button className="btn-white"><FiShoppingCart /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <h5 className="name">{item.category}</h5>
                                            <span className="description">{item.description}</span>
                                            <span className="price">${item.price}</span>
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
                                            <div className="content-btn">
                                                <button className="btn-white">Add Cart</button>
                                                <button className="btn-white">Quick View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ProductList
