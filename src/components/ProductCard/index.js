import React from "react";
import "./styles.scss";
import { connect } from "react-redux";

class ProductCard extends React.Component {


  displayProductDetails() {
    const name = this.props.product.name;
    const gallery = this.props.product.image.url;
    const description = this.props.product.description.html;
    const price = this.props.product.price_range.maximum_price.final_price.value;
    return (
      <div className="productcard">
        <div className="hero">
          <img src={gallery} alt="product img"/>
        </div>
        <div className="productDetails">
          <ul className="list">
            <li>
              <h1>
                {name}
              </h1>
              <h2>
                {price} €
              </h2>
              <p dangerouslySetInnerHTML={{ __html: description}}></p>
              <button className="btn43-44 btn-45">Add to cart</button>

            </li>
          </ul>
        </div>
      </div>);
  }

  render() {
    return (
      <div>
        {this.displayProductDetails()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.productDetailsData.product
  }
}




export default connect(mapStateToProps)(ProductCard);