import React from 'react';
import './products.scss';
import { connect } from 'react-redux';
import { getAllProducts } from '../../actions';

class Products extends React.Component {
    componentDidMount = () => {
        this.props.getAllProducts();
        console.log('Products Component Mounted')
     };
    render() {
        const { products } = this.props;
        const productElements = products.map(product => {
            return <ProductItem key={product.id} {...product} goToDetails={() => this.goToDetails(product.id)} />;
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
        products: state.products.list
    };
}

export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
})(Products);


