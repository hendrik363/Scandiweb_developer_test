export const FETCH_BAG_PENDING = 'FETCH_BAG_PENDING';
export const FETCH_BAG_SUCCESS = 'FETCH_BAG_SUCCESS';
export const FETCH_BAG_FAIL = 'FETCH_BAG_FAIL';

export function fetchBagsPending() {
    return {
        type: FETCH_BAG_PENDING
    }
}

export function fetchBagsSuccess(bags) {
    return {
        type: FETCH_BAG_SUCCESS,
        payload: bags
    }
}

export function fetchBagsError(error) {
    return {
        type: FETCH_BAG_FAIL,
        error: error
    }
}