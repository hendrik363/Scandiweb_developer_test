//import { gql } from "apollo-boost";
import * as actionTypes from "./bags.types";
//import ApolloClient from "apollo-boost";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

var graphql = JSON.stringify({
    query: `
    query {
        products(pageSize:20, filter: {
        category_id:{eq:"4"}
      }){
        items{
          description{
            html
          },
          image{url},
          name,
          price_range{maximum_price{final_price{value}}},
          id
        }
      }
    }
    `
})

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    body: graphql,
}

// export function fetchBags() {
//     console.log("Headers:" + client.headers)
//     return dispatch => {
//         dispatch(actionTypes.fetchBagsPending());
//         client.query({ query: getAllProducts  })
//             .then(res => { return res; })
//             .then(res => {
//                 if (res.error) {
//                     throw (res.error);
//                 } else
//                     dispatch(actionTypes.fetchBagsSuccess(res.data.products.items));
//                 return res.products;
//             })
//             .catch(error => {
//                 dispatch(actionTypes.fetchBagsError(error));
//             })
//     }
// }

export function fetchBags() {
    return dispatch => {
        dispatch(actionTypes.fetchBagsPending());
        fetch("http://127.0.0.1/magento24/graphql/", requestOptions)
            .then(res => { return res; })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                } else
                    dispatch(actionTypes.fetchBagsSuccess(res.data.products.items));
                return res.products;
            })
            .catch(error => {
                dispatch(actionTypes.fetchBagsError(error));
            })
    }
}