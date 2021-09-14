import React, { useEffect } from 'react';
import './styles.scss';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphqlError, networkError }) => {
    if (graphqlError) {
        graphqlError.map(({ message, location, path }) => {
            alert('Graphql erro ${message}')
        })
    }
})
const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:4000/" })
])

const client = new ApolloClient({
    cache: InMemoryCache(),
    link: link
})

class Products extends React.Component {

    render() {
        return (
            <ApolloProvider client={client}>
                <div className="products">

                </div>
            </ApolloProvider>
        );
    }
}

export default Products;