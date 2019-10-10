import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearProductDetails, getProductDetails } from '../../actions/';
import Money from '../general/money';
import './products.scss';
import "bootstrap/dist/css/bootstrap.css";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
     }
     state = {
        quantity: 1,
     };

     componentDidMount(){
        const { getProductDetails, match: { params } } = this.props;
    
        getProductDetails(params.product_id);
    }

    componentWillUnmount(){
        this.props.clearProductDetails();
        // console.log('ProductDetails component about to unmount')
    }

     render() {
        const { details } = this.props;
        if (details == null) {
           return <h1>Loading product</h1>;
        }
        return (
            <div className="row">
                <div className="product-details col">
                    
                    <img src={details.image.url} className='m-3 img-thumbnail'/>
                </div>
                <div className="product-details col">
                    <h2 className="m-3">{details.name}</h2>
                    <p className="m-3 caption">{details.caption}</p>
                    <h3 className="m-3">Description</h3>
                    <p className="m-3">{details.description}</p>
                    <h2 className="m-3 float-right">
                        <Money cost={details.cost} />
                    </h2>
                </div>
            </div>
        )};

}

function mapStateToProps(state) {
    return {
       details: state.products.details,
    };
 }

export default connect (
    mapStateToProps,
    {
        clearProductDetails: clearProductDetails,
        getProductDetails: getProductDetails,
      
    }
) (ProductDetails);