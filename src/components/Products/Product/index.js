import React from "react";
import './../styles.scss';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchProduct } from "../../../redux/Products/products.actions";

class Product extends React.Component {
    handleClick = () => {
        const item = this.props.product;
        this.props.fetchProduct(item);
    }

    render() {
        const product = this.props.product;
        const { name, id, gallery, price } = this.props.product;
        return (
            <div className="product" key={id}>
                
                <div className="thumb">
                    <Link to={`/product/${id}`} onClick={this.handleClick}>
                        <img src={gallery[0]}/>                
                    </Link>
                </div>

                <div className="details">
                    <ul>
                        <li>
                            <span className="name">
                                <Link to={`/product/${id}`} onClick={() => fetchProduct(product)}>
                                    {name}
                                </Link>
                            </span>
                        </li>
                        <li>
                            <span className="price">
                                {price} €
                            </span>
                        </li>
                        <li>
                            <div className="addToCart">
                                <button className="btn43-44 btn-45">
                                    Add to cart
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchProduct: (product) => dispatch(fetchProduct(product))
    };
  };


export default connect(null, mapDispatchToProps)(Product);