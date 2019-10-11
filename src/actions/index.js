import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.sc.lfzprototypes.com';

export const getAllProducts = () => async dispatch => {
    try {
       const response = await axios.get(`${BASE_URL}/api/products`);
       dispatch({
          type: types.GET_ALL_PRODUCTS,
          products: response.data.products,
       });
       
    } catch (err) {
       console.log(err);
    }
 };

export const getProductDetails = productId => async dispatch => {
    try {
       const resp = await axios.get(`${BASE_URL}/api/products/${productId}`);
       dispatch({
          type: types.GET_PRODUCT_DETAILS,
          products: resp.data,
       });
    } catch (err) {
       console.log(err);
    }
 };

 export const addItemToCart = (productId, quantity) => async (dispatch) => {
    try {
        
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        };

        const resp = await axios.post(`${BASE_URL}/api/cart/items/${productId}`, {
            quantity: quantity,
        },
        axiosConfig
        );

        localStorage.setItem("sc-cart-token", resp.data.cartToken);    

        dispatch({
            type: types.ADD_ITEM_TO_CART,
            cartTotal: resp.data.total,
         });
        //  console.log('Add to cart response:', resp);
    } catch(error){
        console.log('Add Item To Cart Error:', error.message);

    }
}

export const clearProductDetails = () => ({ type: types.CLEAR_PRODUCT_DETAILS });