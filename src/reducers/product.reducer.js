import {
    LOADING_PRODUCTS,
    LOADING_PRODUCTS_FULFILLED,
    LOADING_PRODUCTS_FAILED
} from "../actions/product.action";

const initState = {
    loading: false,
    fulfilled: false,
    failed: false,
    error: '',
    productData: []
}

export default function productReducer(state = initState, action) {
    switch (action.type) {
        case LOADING_PRODUCTS:
            return Object.assign({}, state, {
                loading: true,
                fulfilled: false,
                failed: false,
                error: '',
            });
        case LOADING_PRODUCTS_FULFILLED:
            return Object.assign({}, state, {
                loading: false,
                fulfilled: true,
                failed: false,
                error: '',
                productData: action.allProduct
            });
        case LOADING_PRODUCTS_FAILED:
            return Object.assign({}, state, {
                loading: false,
                fulfilled: false,
                failed: true,
                error: action.error,
                productData: []
            });
        default:
            return state;
    }
}