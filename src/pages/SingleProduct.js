import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context';

const SingleProduct = () => {
    const {products} = useGlobalContext();
    const {id} = useParams();
    const selectedProduct = (products.filter(item => item.id === id))
    return (
        <div>
            <div className="singleProduct-container">
                <div className="history-container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop/all">New Arrival</Link></li>
                        <li><Link to="#">Product name</Link></li>
                    </ul>
                </div>
                <div className="top-container">
                    <div className="img-container">
                        <div className="img">

                        </div>
                    </div>
                    <div className="content">
                        <div className="name">
                            <h3 className="h3">hello</h3>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                </div>
                <div className="recommend">

                </div>
            </div>
        </div>
    )
}

export default SingleProduct
