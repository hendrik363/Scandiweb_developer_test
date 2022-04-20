import { combineReducers } from "redux";
import productsReducer from './Products/products.reducer';

const rootReducer = combineReducers({
    productData: productsReducer,


});
export default rootReducer;

