import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context';
import {FaTimes,FaPlus,FaMinus,FaArrowRight,FaFacebookF,FaTwitter,FaEnvelope,FaFacebookMessenger,FaPinterestP,FaGoogle,FaStar,FaStarHalf,FaHeart,FaRegHeart} from 'react-icons/fa'
import {RiArrowRightSLine} from 'react-icons/ri'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Trending from '../component/Trending';
import './scss/SingleProduct.scss'

import Slider from 'react-slick'

const SingleProduct = () => {
    const [count, setCount] = useState(1);
    const {products} = useGlobalContext();
    const {id} = useParams();
    const selectedProduct = (products.filter(item => item.id == id));

    //slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    }

    return (
        <div>
            {selectedProduct.map((item,ind) => {
                return(
                    <div className="singleProduct-container" key={ind}>
                        <div className="history-container section-container">
                            <ul>
                                <li><Link to="/">Home</Link> <span><RiArrowRightSLine /></span></li>
                                <li><Link to="/shop/all">New Arrival</Link> <span><RiArrowRightSLine /></span></li>
                                <li><Link to="#" className="deactive">name</Link></li>
                            </ul>
                        </div>
                        <div className="top-container section-container">
                            <div className="img-container">
                                <div className="img" style={{backgroundImage: `url('${item.image}')`}}>
                                </div>
                            </div>
                            <div className="content">
                                <div className="name">
                                    <h4 className="h4">{item.title}</h4>
                                </div>
                                <div className="price-reviews">
                                    <div className="price">
                                        <h3 className="h3">${item.price}</h3>
                                    </div>
                                    <div className="rating">
                                        <span><i><FaStar /></i></span>
                                        <span><i><FaStar /></i></span>
                                        <span><i><FaStar /></i></span>
                                        <span><i><FaStar /></i></span>
                                        <span><i><FaStarHalf /></i></span>
                                        <span>(11 reviews)</span>
                                    </div>
                                </div>
                                <div className="description">
                                    <p>{item.description}</p>
                                </div>
                                <div className="color-container">
                                    <div className="color-name">
                                        <strong>Color: gray{}</strong>
                                    </div>
                                    <div className="colors">
                                        <div className="single-color">
                                            <span className="color" style={{backgroundColor:'pink'}}></span>
                                            <span className="color-name">pink</span>
                                        </div>
                                        <div className="single-color">
                                            <span className="color" style={{backgroundColor:'black'}}></span>
                                            <span className="color-name">Black</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="size-container">
                                    <div className="size-name">
                                        <strong>Size: s{}</strong>
                                    </div>
                                    <div className="sizes">
                                        <span className="active">S</span>
                                        <span className='deactive'>M</span>
                                        <span>L</span>
                                    </div>
                                </div>
                                <div className="btn-container">
                                    <div className="counter-container">
                                        <div className="counter">
                                            <span className="counter-btn" onClick={() => setCount(count - 1)}><FaMinus /></span>
                                            <input type="number" value={count} onChange={(e) => setCount(e.target.value)}/>
                                            <span className="counter-btn" onClick={() => setCount(count + 1)}><FaPlus /></span>
                                        </div>
                                    </div>
                                    <div className="add-like-btn">
                                        <div className="add-cart-container">
                                            <button className="btn-black">Add To Cart</button>
                                        </div>
                                        <div className="add-wish-list">
                                            <button className="btn-white"><FaRegHeart /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="sponsor">
                                    <img src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/trust_img2_480x.png?v=1587092488" alt="" />
                                </div>
                                <div className="help-btn-container">
                                    <span>Size Guid</span>
                                    <span>Delivery & Return</span>
                                    <span>Ask a question</span>
                                </div>
                                <div className="sku">
                                    <span className="tag-title">SKU: </span>
                                    <p>P15-4</p>
                                </div>
                                <div className="category">
                                    <span className="tag-title">Categories: </span>
                                    <p>{item.category}</p>
                                </div>
                                <div className="tag">
                                    <span className="tag-title">Tags:</span>
                                    <p>Color Black, Color Grey, Color Pink, Price $7-$50</p>
                                </div>

                                <div className="social-container">
                                    <ul>
                                        <li><Link to="#"><FaFacebookF /></Link></li>
                                        <li><Link to="#"><FaTwitter /></Link></li>
                                        <li><Link to="#"><FaEnvelope /></Link></li>
                                        <li><Link to="#"><FaFacebookMessenger /></Link></li>
                                        <li><Link to="#"><FaPinterestP /></Link></li>
                                        <li><Link to="#"><FaGoogle /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-container section-container">
                            <div className="tabs">
                                <Tabs fill>
                                    <TabList>
                                        <Tab>Information</Tab>
                                        <Tab>Terms</Tab>
                                        <Tab>Custom Tab</Tab>
                                        <Tab>Reviews</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <table>
                                            <tr>
                                                <td>Color</td>
                                                <td>Grey, red, yellow</td>
                                            </tr>
                                            <tr>
                                                <td>Size</td>
                                                <td>S,M,L</td>
                                            </tr>
                                        </table>
                                    </TabPanel>
                                    <TabPanel className="warranty">
                                        <h4 className="h4">Warranty</h4>
                                        <p className="warranty-para">If issues experienced with the frame include a manufacturer's defect, or an issue resulting from an inherent flaw in the product, RAEN provides a 365 day warranty from the time of purchase. If you feel your product meets these requirements, please email warranty@domain.com explaining the nature of your warranty claim and all necessary details.</p>
                                        <p>Scratched lenses and physical damage are not covered by warranty. Unfortunately we do not manufacture or sell replacement lenses.</p>

                                        <strong>Free FedEx 2-Day Shipping</strong>

                                        <p>Free FedEx 2-Day Shipping is available exclusively to the U.S. on orders over $150. FedEx 2-Day packages are delivered Monday through Friday.</p>

                                        <strong>Free FedEx Ground Shipping</strong>

                                        <p>Free FedEx Ground Shipping is available exclusively to U.S. orders over $100.</p>

                                        <strong>Free Returns</strong>

                                        <p>Free returns are available on all U.S. order within 14 days of shipment.</p>
                                    </TabPanel>
                                    <TabPanel className="warranty">
                                        <h4 className="h4">Custom tab</h4>
                                        <p className="warranty-para">If issues experienced with the frame include a manufacturer's defect, or an issue resulting from an inherent flaw in the product, RAEN provides a 365 day warranty from the time of purchase. If you feel your product meets these requirements, please email warranty@domain.com explaining the nature of your warranty claim and all necessary details.</p>
                                        <p>Scratched lenses and physical damage are not covered by warranty. Unfortunately we do not manufacture or sell replacement lenses.</p>

                                        <strong>Free FedEx Ground Shipping</strong>

                                        <p>Free FedEx Ground Shipping is available exclusively to U.S. orders over $100.</p>

                                        <strong>Free Returns</strong>

                                        <p>Free returns are available on all U.S. order within 14 days of shipment.</p>
                                    </TabPanel>
                                    <TabPanel className="warranty">
                                        <h4 className="h4">Reviews</h4>
                                        <p className="warranty-para">If issues experienced with the frame include a manufacturer's defect, or an issue resulting from an inherent flaw in the product, RAEN provides a 365 day warranty from the time of purchase. If you feel your product meets these requirements, please email warranty@domain.com explaining the nature of your warranty claim and all necessary details.</p>
                                        <p>Scratched lenses and physical damage are not covered by warranty. Unfortunately we do not manufacture or sell replacement lenses.</p>

                                        <strong>Free FedEx 2-Day Shipping</strong>

                                        <p>Free FedEx 2-Day Shipping is available exclusively to the U.S. on orders over $150. FedEx 2-Day packages are delivered Monday through Friday.</p>

                                        <strong>Free FedEx Ground Shipping</strong>

                                        <p>Free FedEx Ground Shipping is available exclusively to U.S. orders over $100.</p>

                                        <strong>Free Returns</strong>

                                        <p>Free returns are available on all U.S. order within 14 days of shipment.</p>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                        <div className="recommend">
                            <Trending />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SingleProduct



