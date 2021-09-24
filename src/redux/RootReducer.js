import { combineReducers } from "redux";

import productsReducer from './Products/products.reducer';

export default combineReducers({
    productData: productsReducer
});

