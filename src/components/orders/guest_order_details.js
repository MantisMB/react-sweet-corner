import React, { Component } from 'react';
import {getGuestOrderDetails} from '../../actions/index';
import {connect} from 'react-redux';


class guestOrderDetails extends Component {

  
    render() {
  
      return (
        <div className="container products">
            <div className="row">
                <div className="col">
                    <h1 className="center">Guest Order Details</h1>
                </div>
            </div>
        </div>
      )
    }
  }
  
  function mapStateToProps(state){
    console.log('mapStateToProps-state',state)
    return state
  }
  
  export default  connect(mapStateToProps,{getGuestOrderDetails})(guestOrderDetails);