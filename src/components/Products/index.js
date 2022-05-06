import React from "react";
import "./styles.scss";
import Product from "./Product";
import FormInput from "./../forms/FormInput";
import Modal from "./../Modal";
import Button from "./../forms/Button";
import { connect } from "react-redux";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      price: "",
      description: ""
    };

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
  }


  displayProducts() {
    const { products } = this.props;

    return products.map((product) => {
      const configProduct = {
        product
      };
      return <Product {...configProduct} key={product.id} />;
    });
  }


  state = {
    show: false,
  };
  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleURLChange(e) {
    this.setState({ url: e.target.value });
  }

  handlePriceChange(e) {
    this.setState({ price: e.target.value });
  }

  handleDescChange(e) {
    this.setState({ description: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.price);
    this.showModal();
  }

  render() {
    return (
      <div className="products">
        <h1>Browse Products</h1>
        <div className="productresults">
          <div className="callToActions">
            <button
              className="btn43-44 btn-45"
              onClick={(e) => {
                this.showModal();
              }}
            >
              Add new product
            </button>
            <Modal onClose={this.showModal} show={this.state.show}>
              <div className="addNewProductForm" onSubmit={this.handleSubmit}>
                <form>
                  <h2>Add new product</h2>

                  <FormInput
                    placeholder="Product name..."
                    type="text"
                    label="Name"
                    value={this.state.name}
                    handleChange={this.handleNameChange}
                  />

                  <FormInput
                    placeholder="URL..."
                    type="text"
                    label="Main image URL"
                    value={this.state.url}
                    handleChange={this.handleURLChange}
                  />
                  <FormInput
                    placeholder="Price..."
                    type="number"
                    label="Price"
                    value={this.state.price}
                    handleChange={this.handlePriceChange}
                  />
                  <FormInput
                    placeholder="Add description..."
                    type="text"
                    label="Description"
                    value={this.state.description}
                    handleChange={this.handleDescChange}
                  />
                  <Button>Add product</Button>
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

const mapStateToProps = (state) => {
  return {
    products: state.productData.products
  };
};

export default connect(mapStateToProps)(Products);

