import * as actionTypes from './products.types';

export function fetchProducts() {
  return {
      type: actionTypes.FETCH_PRODUCTS
  }
}

export function fetchProduct(product) {
  return {
    type: actionTypes.FETCH_PRODUCT,
    payload: product
  }
}


