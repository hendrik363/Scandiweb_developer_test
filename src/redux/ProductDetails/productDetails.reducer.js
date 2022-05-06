import * as actionTypes from "./productDetails.types";

const initialState = {
    product: null
};

export default function productDetailsReducer(state = initialState, action) {
    switch(action.type) {  
        case actionTypes.FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
};