import {
    TOGGLE_PRODUCT_DETAIL
} from "../actions/product.action";

const initState = {
    toggleProdDetail: false
}

export default function productDetailReducer(state = initState, action) {
    switch (action.type) {
        case TOGGLE_PRODUCT_DETAIL:
            return Object.assign({}, state, {
                toggleProdDetail: action.toggleProdDetail,
                product: action.product
            });
        default:
            return state;
    }
}