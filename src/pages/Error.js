import React from 'react'
import { useHistory } from 'react-router-dom'
import './scss/Error.scss'
const Error = () => {
    const location = useHistory();
    return (
        <div className="section -container error">
            <h1 className="h1">404</h1>
            <h4 className="h4">This page is not Found. <br /> Don't care about this , we Suggest You a another page.</h4>
            <button className="btn-black" onClick={() => location.push('/')}>Home</button>
        </div>
    )
}

export default Error
