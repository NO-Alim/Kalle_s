import React from 'react'
import Blog from '../component/Blog'
import './scss/Blogs.scss'

const Blogs = () => {
    return (
        <div>
            <div className="flex-sb-2 section-container">
                <div className="blog-container">
                    <div className="img-container">
                        <img src='https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/1_540x.jpg?v=1581524880' alt="" />
                    </div>
                    <div className="content">
                        <div className="post-date"><span>By</span> admin <span>on</span> April 4,2021</div>
                        <span className="post-title">Spring - summer Trending 2021</span>
                    </div>
                </div>
                <div className="blog-container">
                    <div className="img-container">
                        <img src='https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/street-style-girl3_540x.jpg?v=1586139309' alt="" />
                    </div>
                    <div className="content">
                        <div className="post-date"><span>By</span> admin <span>on</span> April 4,2021</div>
                        <span className="post-title">style for cuple in weeding season</span>
                    </div>
                </div>
            </div>
            <Blog />
        </div>
    )
}

export default Blogs
