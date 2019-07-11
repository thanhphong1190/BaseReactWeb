import { combineReducers } from 'redux';
import demoReducer from './demo.reducer';
import loginReducer from './login.reducer';
import productReducer from './product.reducer';
import productDetailReducer from './product-detail.reducer';

export default combineReducers({
  demo: demoReducer,
  login: loginReducer,
  products: productReducer,
  productDetail: productDetailReducer
});
