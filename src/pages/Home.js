import React from 'react'
import Blog from '../component/Blog'
import Campaign from '../component/Campaign'
import Categories from '../component/Categories'
import Header from '../component/Header'
import Services from '../component/Services'
import ShopLook from '../component/ShopLook'
import Trending from '../component/Trending'

const Home = () => {
    return (
        <div>
            <Header />
            <Categories />
            <Trending />
            <Campaign />
            <Blog />
            <ShopLook />
            <Services />
        </div>
    )
}

export default Home
