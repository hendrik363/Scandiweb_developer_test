import * as actionTypes from "./productDetails.types";

export function fetchProduct(product) {
  return {
    type: actionTypes.FETCH_PRODUCT,
    payload: product
  }
}