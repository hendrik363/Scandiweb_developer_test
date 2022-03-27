import { gql } from "apollo-boost";
import {fetchProductDetailsPending, fetchProductDetailsSuccess, fetchProductDetailsError} from './productDetails.types';
import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
    uri: "http://localhost:4000",
  });
  
  // const getAllProductDetails = gql`
  // {product(id: "huarache-x-stussy-le"){
  
  //   id
  //   name
  //   inStock
  //   description
  //   gallery
  // }
  // }
  // `;

  export function fetchProductDetails(productID) {
    console.log("ProductID: " + productID)
    return dispatch => {
      dispatch(fetchProductDetailsPending());
      client.query({query:gql`
      {product(id: "${productID}"){
      
        id
        name
        inStock
        description
        gallery
      }
      }
      `})
      .then(res=> { return res;})
      .then(res => {
        if(res.error) {
          throw(res.error);
        }else
        dispatch(fetchProductDetailsSuccess(res.data.product));
        return res.product;
      })
      .catch(error => {
        dispatch(fetchProductDetailsError(error));
      })
    }
  }
  