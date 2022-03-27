import {FETCH_PRODUCTDETAILS_PENDING, FETCH_PRODUCTDETAILS_SUCCESS, FETCH_PRODUCTDETAILS_FAIL} from "./productDetails.types";

const initialState = {
    id: {},
    pending: true,
    product: {},
    error: null
};


export default function productDetailsReducer(state = initialState, action) {
    switch(action.type) {  
        case FETCH_PRODUCTDETAILS_PENDING:
            return {
                ...state, 
                pending:true,
                product:  action.id
            }
        case FETCH_PRODUCTDETAILS_SUCCESS:
            return {
                ...state,
                pending: false,
                product: action.payload
            }
        case FETCH_PRODUCTDETAILS_FAIL:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
};

export const getProductDetails = state => state.product;
export const getProductDetailsPending = state => state.pending;
export const getProductDetailsError = state => state.error;

