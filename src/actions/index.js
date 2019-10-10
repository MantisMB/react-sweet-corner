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


export const clearProductDetails = () => ({ type: types.CLEAR_PRODUCT_DETAILS });