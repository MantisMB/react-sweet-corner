import React from 'react';
import './footer.scss';

export default props => {
    const year = new Date().getFullYear();
    return (
        <footer>
        <div className="dots"></div> 
        <div className="date"><p>&copy; {year} Sweet Corner all rights reserved.</p></div>
        <div className="phone"><p><i className="fa fa-phone"></i>800-264-2099</p></div> 
        </footer>
    );
}