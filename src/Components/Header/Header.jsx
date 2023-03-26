import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='Header'>
            <img src={logo} alt="" />
            <div className='ancore'>
            <a href="/order">Order</a>
            <a href="/Order Review">Order Review</a>
            <a href="/Manage Inventory">Manage Inventory</a>
            <a href="/Login">Login</a>
            </div>
            
        </nav>
    );
};

export default Header;