export const FETCH_PRODUCTDETAILS_PENDING = 'FETCH_PRODUCTDETAILS_PENDING';
export const FETCH_PRODUCTDETAILS_SUCCESS = 'FETCH_PRODUCTDETAILS_SUCCESS';
export const FETCH_PRODUCTDETAILS_FAIL = 'FETCH_PRODUCTDETAILS_FAIL';

export function fetchProductDetailsPending(productID) {
    return {
        type: FETCH_PRODUCTDETAILS_PENDING,
        payload: productID
    }
}

export function fetchProductDetailsSuccess(products) {
    return {
        type: FETCH_PRODUCTDETAILS_SUCCESS,
        payload: products
    }
}

export function fetchProductDetailsError(error) {
    return {
        type: FETCH_PRODUCTDETAILS_FAIL,
        error: error
    }
}