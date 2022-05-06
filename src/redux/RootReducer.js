import { combineReducers } from "redux";
import bagReducer from "./Bags/bags.reducer";
import productsReducer from './Products/products.reducer';
import productDetailsReducer from "./ProductDetails/productDetails.reducer";

const rootReducer = combineReducers({
    productData: productsReducer,
    bagData: bagReducer,
    productDetailsData: productDetailsReducer
    

});
export default rootReducer;

