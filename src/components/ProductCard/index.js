import React from "react";
import "./styles.scss";
import { connect } from "react-redux";

class ProductCard extends React.Component {


  displayProductDetails() {
    const { gallery, name, price, description } = this.props.product;
    console.log(price);
    return (
      <div className="productcard">
        <div className="hero">
          <img src={gallery[0]} />
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
              <p>{description}</p>
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
    product: state.productData.product
  }
}




export default connect(mapStateToProps)(ProductCard);