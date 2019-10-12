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
        console.log('Cart Items:', this.props.cartItems);
        return (
            <div className="container">
                <div className="row">
                    <div className="col cart">
                        <h1>Cart</h1>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
       cartItems: state.cart.items,
    };
 }

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart
})(Cart);