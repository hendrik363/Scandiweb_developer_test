export const FETCH_PRODUCT_PENDING = 'FETCH_PRODUCT_PENDING';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAIL = 'FETCH_PRODUCT_FAIL';

export function fetchProductsPending() {
    return {
        type: FETCH_PRODUCT_PENDING
    }
}

export function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: products
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCT_FAIL,
        error: error
    }
}