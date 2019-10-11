import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActiveCart } from '../../../src/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.scss';

class Cart extends Component {
    componentDidMount(){
        this.props.getActiveCart();
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col cart">
                        <h1 >Cart</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {
    getActiveCart: getActiveCart
})(Cart);