import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context'
import {FaPlus,FaMinus} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'
import './scss/WishList.scss'

const WishList = () => {
    const {products,cartLoading,handleWishList} = useGlobalContext();
    const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem('wishList')));
    const location = useHistory();

    const wishProduct = products.filter(item => wishList.includes(item.id));
    console.log(wishProduct);
    useEffect(() => {
        setWishList(JSON.parse(localStorage.getItem('wishList')))
    },[cartLoading]);

    if (wishList && wishList.length < 1) {
        return(
            <h3 className="h3 section-container" style={{fontWeight: '400',textAlign: 'center'}}>There is no Item in your wishList.</h3>
        )
    }

    return (
        <div className="section-container wishList">
            {wishProduct.map((item,ind)=>{
                return(
                    <div className="item" key={ind}>
                        <div className="product-container">
                            <div className="img-container" onClick={() => location.push(`/product/${item.id}`)}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className="product-content">
                                <span className="name" onClick={() => location.push(`/product/${item.id}`)}>{((item.title).replace(/^(.{50}[^\s]*).*/, "$1") + "\n")}</span>
                                <span className="delete-btn" onClick={() => handleWishList(item.id)}><i><RiDeleteBin6Line /></i></span>
                                <span className="price">$ {item.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}

export default WishList
