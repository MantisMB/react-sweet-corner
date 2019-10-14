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
        }
        
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
      //   console.log('Add Item To Cart Error:', error.message);

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
      //   console.log('Get active cart error:', err);
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
   //  console.log('Get Totals Response:', resp);
    } catch (err) {
      //   console.log('Error getting cart totals:', err);
    }
 };

 export const createGuestOrder = guest => async dispatch => {
    try {
        
        const cartToken = localStorage.getItem('sc-cart-token');

        const axiosConfig = {
            headers: {
                'x-cart-token': cartToken
            }
        }
 
       const res = await axios.post(`${BASE_URL}/api/orders/guest`, guest, axiosConfig);
 
       localStorage.removeItem("sc-cart-token");
 
       dispatch({
          type: types.CREATE_GUEST_ORDER,
          order: {
             id: res.data.id,
             message: res.data.message,
          },
       });
 
       return {
          email: guest.email,
          order_Id: res.data.id,
       };
    } catch (err) {
       console.log("Error from Guest checkout", err);
    }
 };
 
 export const getGuestOrderDetails = (email, orderId) => async dispatch => {
    try {
       const res = await axios.get(`${BASE_URL}/api/orders/guest/${orderId}?email=${email}`);
 
       dispatch({
          type: types.GET_GUEST_ORDER_DETAILS,
          orderDetail: res,
       });
    } catch (err) {
       console.log("getGuestOrderDetails", err);
    }
 };



 export const clearProductDetails = () => ({ type: types.CLEAR_PRODUCT_DETAILS });