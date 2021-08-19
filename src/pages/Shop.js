import React from 'react'
import ShopHeader from '../ShopComponent/ShopHeader'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ShopNav from '../ShopComponent/ShopNav'
import ProductList from '../ShopComponent/ProductList'

const Shop = () => {
    return (
        <div>
            <Router>
                <ShopNav />
                <Route exact path="/shop/:id">
                    <ShopHeader />
                    <ProductList />
                </Route>
            </Router>
        </div>
    )
}

export default Shop
