import React, { Component } from 'react';
import { Field,reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createGuestOrder,getGuestOrderDetails } from '../../actions/index'
import './checkout.scss';


class GuestCheckout extends Component {

    handleGuestCheckout = async guest =>{

        const orderInfo = await this.props.createGuestOrder(guest);
        const url = `/orders/guest/${orderInfo.order_Id}?email=${orderInfo.email}`
        const redirectUrl = url;
        this.props.history.push(redirectUrl)
    
        setTimeout(() => {
          this.props.reset();
        }, 1500);
    
      }

      render() {
        const {handleSubmit, pristine, submitting} = this.props
        return (
          <div className='parent'>
                <h1 className="m-3">Guest Checkout</h1>
        
                <form onSubmit={handleSubmit(this.handleGuestCheckout)} className='form_login'>
        
            <div className="form-group">
                <Field 
                    className="first"
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder="First Name"
                />
            </div>
        
                <div className="form-group">
                <Field
                    className="last"
                    name="lastName"
                    component="input"
                    type="text"
                    placeholder="Last Name"
                />
                </div>
        
                <div className="form-group">
                <Field
                    className="emailcheckout"
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Email"
                />
                </div>
        
            <div>
                <button className='button' type="submit" 
                disabled = {pristine || submitting}
                >Submit Order</button>
            </div>
            </form>
          </div>
        )
      }
    }

GuestCheckout = reduxForm({
    form: 'GuestCheckout'
})(GuestCheckout);

export default connect(null,{createGuestOrder,getGuestOrderDetails})(GuestCheckout);