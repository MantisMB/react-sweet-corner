import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.sc.lfzprototypes.com';

export const getAllProducts = () => async dispatch => {
    try {
        const resp = await axios.get(BASE_URL + '/api/products');

        dispatch({
            type: types.GET_ALL_PRODUCTS,
            products: resp.data.products
        });
    } catch(err) {
        console.log('Error getting all products:', err);
    }
}