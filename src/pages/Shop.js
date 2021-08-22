import React from 'react'
import ShopHeader from '../ShopComponent/ShopHeader'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ShopNav from '../ShopComponent/ShopNav'
import ProductList from '../ShopComponent/ProductList'
import SingleProduct from './SingleProduct'

const Shop = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/shop/:id">
                    <ShopNav />
                    <ShopHeader />
                    <ProductList />
                </Route>
                <Route exact path="/product/:id">
                    <SingleProduct />
                </Route>
            </Switch>
        </div>
    )
}

export default Shop
