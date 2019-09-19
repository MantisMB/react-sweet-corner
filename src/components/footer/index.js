import React from 'react';
import './footer.scss';

export default props => {
    const year = new Date().getFullYear();
    return (
        <footer>
        <div className="dots"></div> 
        <div className="date">&copy; {year} Sweet Corner all rights reserved</div>
        <div className="phone"><i className="fa fa-phone"></i>800-264-2099</div> 
        </footer>
    );
}