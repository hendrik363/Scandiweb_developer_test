import {FETCH_PRODUCTDETAILS} from "./productDetails.types";

const initialState = {
    id: {},
    product: {},
};


export default function productDetailsReducer(state = initialState, action) {
    switch(action.type) {  
        case FETCH_PRODUCTDETAILS:
            return {
                ...state, 
                product:  action.id
            }
        default:
            return state;
    }
};


