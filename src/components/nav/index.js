import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cart_widget';
import 'bootstrap/dist/css/bootstrap.css';
import './nav.scss';

export default props => {
    return (
        <nav className="navbar float-right">
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
                <CartWidget />
            </ul>
        </nav>
    );
}