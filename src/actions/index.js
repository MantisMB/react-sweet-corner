import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.sc.lfzprototypes.com';



function tokenCheck() {
    const cartToken = localStorage.getItem("sc-cart-token");
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("sc-cart-token")
       return {
          headers: {
             Authorization: localStorage.getItem("token"),
          },
       };
    } else if (cartToken) {
       return {
          headers: {
             "X-Cart-Token": localStorage.getItem("sc-cart-token"),
          },
       };
    } else {
       return null;
    }
 };

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
        
        const axiosConfig = tokenCheck();
        
        const resp = await axios.post(`${BASE_URL}/api/cart/items/${productId}`, {
            quantity: quantity,
        },
        axiosConfig,
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
};



export const getActiveCart = () => async dispatch => {

    try {
        const cartToken = localStorage.getItem('sc-cart-token');

        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }

        const resp = await axios.get(`${BASE_URL}/api/cart`, axiosConfig);
        // console.log('Get active cart server response:', resp);
        dispatch({
            type: types.GET_ACTIVE_CART,
            cart: resp.data,
         });
        // console.log('Get active cart server response:', resp);
        // console.log('Get active cart action creator');
    } catch(err){
        console.log('Get active cart error:', err);
    }
}

export const getCartTotals = () => async dispatch => {
    try {
       
        const cartToken = localStorage.getItem('sc-cart-token');

        const axiosConfig = {
            headers: {
                'x-cart-token': cartToken
            }
        }
 
       const resp = axios.get(`${BASE_URL}/api/cart/totals`, axiosConfig);
       
       dispatch({
          type: types.GET_CART_TOTALS,
          total: resp.data,
       });
    console.log('Get Totals Response:', resp);
    } catch (err) {
        console.log('Error getting cart totals:', err);
    }
 };

 export const clearProductDetails = () => ({ type: types.CLEAR_PRODUCT_DETAILS });