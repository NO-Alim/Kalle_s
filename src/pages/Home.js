import React from 'react'
import Categories from '../component/Categories'
import Header from '../component/Header'
import Trending from '../component/Trending'

const Home = () => {
    return (
        <div>
            <Header />
            <Categories />
            <Trending />
        </div>
    )
}

export default Home
