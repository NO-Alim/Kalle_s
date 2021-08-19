import React from 'react'
import { useParams } from 'react-router-dom'
import './Scss/ShopHeader.scss'

const ShopHeader = () => {
    const {id} = useParams();
    return (
        <div>
            <div className="shop-header">
                <h3 className="h3">{id}</h3>
            </div>
        </div>
    )
}

export default ShopHeader
