import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { fetchProductDetails } from "../../redux/ProductDetails/productDetails.actions";
import {
  getProductDetailsError,
  getProductDetails,
  getProductDetailsPending,
} from "../../redux/ProductDetails/productDetails.reducer";
import { bindActionCreators } from "redux";


class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }
  componentDidMount() {
    const productID = this.props.id;
    const { fetchProductDetails } = this.props;
    fetchProductDetails(productID);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    return pending;
  }

  displayProductDetails() {
    const { product } = this.props;
    console.log("GALLERY: " + product)
    if (this.shouldComponentRender()) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="productcard">
        <div className="hero">
          <img src={product.gallery} />
        </div>
        <div className="productdetails">
          <ul>
            <li>
              <h1>
                {product.name}
              </h1>
              <h2>
                {}
              </h2>
              
                {product.description}
              
            </li>
          </ul>
        </div>
      </div>);
    }
  }

  render() {
    return (
      <div>
      {this.displayProductDetails()}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  error: getProductDetailsError(state.productDetailsData),
  product: getProductDetails(state.productDetailsData),
  pending: getProductDetailsPending(state.productDetailsData),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProductDetails: fetchProductDetails,
    },
    dispatch
  );

export default connect( mapStateToProps, mapDispatchToProps)(ProductCard);