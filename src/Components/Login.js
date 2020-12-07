import React from 'react'
import "../Style/Login.css";
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className='login'>
        
        <Link to='/'>
        <img clasName='login_logo' src='http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
        </Link>

            
        </div>
    )
}
