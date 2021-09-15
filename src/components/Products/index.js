import React from 'react';
import './styles.scss';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Product from './Product';

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

class Products extends React.Component {
    displayProducts() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading books...</div>)
        } else {
            return data.category.products.map(product => {
                const productName = product.name;
                const productId = product.id;
                const configProduct = {
                    productName,
                    productId
                };
                return (
                    <Product {...configProduct} />
                );
            })
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className="products">
                <h1>Browse Products</h1>
                <div className="productresults">         
                    <ul id="product-list">
                        {this.displayProducts()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default graphql(getAllProducts)(Products);