import {FETCH_BAG_PENDING, FETCH_BAG_SUCCESS, FETCH_BAG_FAIL} from "./bags.types";

const initialState = {
    pending: true,
    bags: [],
    error: null
};

export default function bagReducer(state = initialState, action) {
    switch(action.type) {  
        case FETCH_BAG_PENDING:
            return {
                ...state, 
                pending:true
            }
        case FETCH_BAG_SUCCESS:
            return {
                ...state,
                pending: false,
                bags: action.payload
            }
        case FETCH_BAG_FAIL:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
};

export const getBags = state => state.bags;
export const getBagsPending = state => state.pending;
export const getBagsError = state => state.error;