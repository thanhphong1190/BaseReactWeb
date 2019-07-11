import { call, put, takeLatest, all } from "redux-saga/effects";
import { delay } from "redux-saga";
import ProdList from "../helpers/mock-data/productList"
import { 
    LOADING_PRODUCTS,
    LOADING_PRODUCTS_FULFILLED,
    LOADING_PRODUCTS_FAILED 
} from "../actions/product.action";
import AppConfig from "../config";
import request from "../helpers/request.helper";

function* loadProducts() {
    try {
        const _products= ProdList;
        yield put({ type: LOADING_PRODUCTS_FULFILLED, allProduct: _products });

    }catch(e) {
        yield put({ type: LOADING_PRODUCTS_FULFILLED, error: AppConfig.generalError});
    }
}

export default function* watchProductSagasAsync() {
    yield all([
        takeLatest(LOADING_PRODUCTS, loadProducts)
    ]);
}