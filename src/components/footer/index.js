import React from 'react';
import './footer.scss';

export default props => {
    return (
        <footer>
        <div className="dots"></div> 
        <div className="date">&copy; 2019 all rights reserved</div>
        <div><i className="fa fa-phone"></i>800-264-2099</div> 
        </footer>
    );
}