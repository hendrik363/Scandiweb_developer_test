import { gql } from "apollo-boost";
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './products.types';
import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "http://localhost:4000",
});

const getAllProducts = gql`
  {
    category {
      products {
        id
        name
      }
    }
  }
`;

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsPending());
    client.query({query:getAllProducts})
    .then(res=> { return res;})
    .then(res => {
      if(res.error) {
        throw(res.error);
      }else
      dispatch(fetchProductsSuccess(res.data.category.products));
      return res.products;
    })
    .catch(error => {
      dispatch(fetchProductsError(error));
    })
  }
}
