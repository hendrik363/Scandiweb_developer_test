export const fetchProductStart = productId => ({
    type: productTypes.FETCH_PRODUCT_START,
    payload: productId
});

export const setProduct = product => ({
    type: productTypes.SET_PRODUCT,
    payload: product
});