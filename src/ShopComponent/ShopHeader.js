import React from 'react'
import { useParams } from 'react-router-dom'
import './Scss/ShopHeader.scss'

const ShopHeader = () => {
    const {id} = useParams();
    return (
        <div>
            <div className="shop-header">
                <div className="header-content">
                    <h3 className="h3">{id}</h3>
                    <p>Shop through our latest selection of Women’s Clothing and Accessories.</p>
                </div>
            </div>
        </div>
    )
}

export default ShopHeader
