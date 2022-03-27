import { combineReducers } from "redux";

import productsReducer from './Products/products.reducer';
import productDetailsReducer from './ProductDetails/productDetails.reducer';

const rootReducer = combineReducers({
    productData: productsReducer,
    productDetailsData: productDetailsReducer


});
export default rootReducer;

