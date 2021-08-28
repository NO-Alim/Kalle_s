import React, { useEffect, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../context'
import './scss/NavbarSearch.scss'

const NavbarSearch = ({setSearchDrawer}) => {
    const {products,loading} = useGlobalContext();
    const [itemList, setItemList] = useState(products);
    const [searchText, setSearchText] = useState('');
    const location = useHistory();
    

    useEffect(() => {
        setItemList(products);
    },[loading])

    useEffect(() => {
        setItemList(products.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())));
    },[searchText])
    
    return (
        <div className="navbarSearch">
            <div className="from-container">
                <form>
                    <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button><FiSearch /></button>
                </form>
            </div>
            <div className="result-container">
                <strong>{searchText? 'Search Result:' : 'Need some inspiration?'}</strong>
                <div className="search-result">
                    {itemList.length < 1 && <span>No product were found matching your selection.</span>}
                    {loading ? <h3>Loading...</h3> : <div className="result">
                        {itemList.map((item,ind) => {
                            return(
                                <div className="item" key={ind} onClick={() => {location.push(`/product/${item.id}`);setSearchDrawer(false);setSearchText('')}}>
                                    <div className="img-container">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="content">
                                        <span className="name">{((item.title).replace(/^(.{50}[^\s]*).*/, "$1") + "\n")}</span>
                                        <span className="price">${item.price}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default NavbarSearch
