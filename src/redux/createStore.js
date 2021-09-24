import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import productReducer from './Products/products.reducer';


const store = createStore(productReducer, applyMiddleware(thunk,  logger));

export default store;