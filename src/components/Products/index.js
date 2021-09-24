import React from "react";
import "./styles.scss";
import Product from "./Product";
import FormInput from "./../forms/FormInput";
import Modal from "./../Modal";
import Button from "./../forms/Button";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/Products/products.actions";
import {
  getProductsError,
  getProducts,
  getProductsPending,
} from "../../redux/Products/products.reducer";
import { bindActionCreators } from "redux";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      price: "",
    };

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    return pending;
  }

  displayProducts() {
    const { products } = this.props;
    if (this.shouldComponentRender()) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return products.map((product) => {
        const productName = product.name;
        const productId = product.id;
        const configProduct = {
          productName,
          productId,
        };
        return <Product {...configProduct} />;
      });
    }
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

  handleSubmit(e) {
    e.preventDefault();
    //console.log(this.state);
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
                    placeholder="Product name"
                    type="text"
                    label="Name"
                    value={this.state.value}
                    handleChange={this.handleNameChange}
                  />

                  <FormInput
                    placeholder="URL"
                    type="text"
                    label="Main image URL"
                    handleChange={this.handleURLChange}
                  />
                  <FormInput
                    placeholder="Price"
                    type="number"
                    label="Price"
                    handleChange={this.handlePriceChange}
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

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProducts: fetchProducts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Products);
