import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export default props => {
    return (
        <ul className="main-nav">
            <li className="nav-item nav-link active">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item nav-link">
               <Link className={`menuList link `}
               to="/products">Products</Link>
           </li>
            <li className="nav-item nav-link">
               <Link className={`menuList link `}
               to="/about">About Us</Link>
           </li>
            <li className="nav-item nav-link">
               <Link className={`menuList link `}
               to="/services">Services</Link>
           </li>
            <li className="nav-item nav-link">
               <Link className={`menuList link `}
               to="/contact">Contact</Link>
            </li>
        </ul>
    );
}