import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAllProducts } from '../../actions/index.js';
import './products.scss';
import "bootstrap/dist/css/bootstrap.css";

class Products extends Component {
    componentDidMount = () => {
        this.props.getAllProducts();
        console.log('Products Component Mounted')
     };
    render() {
        const { products } = this.props;
        const productElements = products.map(product => {
            console.log(products)
          });
        return (
        <div className='container products'>
            <h1 className="center m-4">Shop our cupcakes</h1>
            <div className="row mb-5">{productElements}</div>
        </div>
        );
    }
}

function mapStateToProps(state){
    console.log('Products Component mapStateToProps state:', state);
    
    return {
        products: state.products.list,
    };
}
 
  export default connect(
    mapStateToProps,
    {
      getAllProducts,
      
    },
  )(Products);