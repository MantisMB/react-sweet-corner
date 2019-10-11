import types from '../actions/types';

const DEFAULT_STATE = {
    total: null,
    cartId: null,
    items: null,
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.ADD_ITEM_TO_CART:
            // console.log('Cart Reducer Action:', action);
            return { ...state, total: action.cartTotal 
            };
        case types.GET_ACTIVE_CART:
            if (!action.cart) return false;
            // console.log('Cart Reducer Action:', action);
            return {
                ...state,
                total: action.cart.total,
                cartId: action.cart.cartId,
                items: action.cart.items,
            };
        default:
            return state;
    }
}

