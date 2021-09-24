import {FETCH_PRODUCT_PENDING, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAIL} from "./products.types";

const initialState = {
    pending: true,
    products: [],
    error: null
};


export default function productReducer(state = initialState, action) {
    switch(action.type) {  
        case FETCH_PRODUCT_PENDING:
            return {
                ...state, 
                pending:true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case FETCH_PRODUCT_FAIL:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
};

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;

