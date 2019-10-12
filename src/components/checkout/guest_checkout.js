import React, { Component } from 'react';
import { Field,reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './checkout.scss';


class GuestCheckout extends Component {

    handleGuestCheckout = async guest =>{

        const orderInfo = await this.props.createGuessOrder(guest);
        const url = `/orders/guest/${orderInfo.order_Id}?email=${orderInfo.email}`
        const redirectUrl = url;
        this.props.history.push(redirectUrl)
    
        setTimeout(() => {
          this.props.reset();
        }, 1500);
    
      }

    render () {
        return (

            <div className="guest-checkout">
                <h1 className="center">Guest Checkout</h1>
            </div>

    )}
}

GuestCheckout = reduxForm({
    form: 'GuestCheckout'
})(GuestCheckout);

export default connect(null)(GuestCheckout);