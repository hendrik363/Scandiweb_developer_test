import React from 'react';
import './styles.scss';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Product from './Product';
import FormInput from './../forms/FormInput';
import Modal from './../Modal';

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

    state = {
        show: false
    };
    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };


    render() {
        //console.log(this.props)
        return (
            <div className="products">
                <h1>Browse Products</h1>
                <div className="productresults">
                     <div className="callToActions">
                        <button className="btn43-44 btn-45" onClick={e => {
                            this.showModal();
                        }}>
                            Add new product
                        </button>
                        <Modal onClose={this.showModal} show={this.state.show}>
                            <div className="addNewProductForm">
                                <form>
                                    <h2>
                                        Add new product
                                    </h2>
                                    <FormInput label="Name" />
                                </form>
                            </div>
                        </Modal>

                    </div>
                    {this.displayProducts()}
                </div>

            </div>
        );
    }
}

export default graphql(getAllProducts)(Products);