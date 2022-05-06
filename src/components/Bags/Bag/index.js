import React from "react";
import './../styles.scss';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchProduct } from "../../../redux/ProductDetails/productDetails.actions";

class Bag extends React.Component {
    handleClick = () => {
        const item = this.props.product;
        this.props.fetchProduct(item);
    }

    render() {
        const name = this.props.product.name;
        const price = this.props.product.price_range.maximum_price.final_price.value;
        const gallery = this.props.product.image.url;
        const id = this.props.product.id;
        //console.log("PRODUCT: " + JSON.stringify(productPic))
        return (
            <div className="bag" key={id}>

                <div className="thumb">
                    <Link to={`/product/${id}`} onClick={this.handleClick}>
                        <img src={gallery} alt="pic" />
                    </Link>
                </div>

                <div className="details">
                    <ul>
                        <li>
                            <span className="name">
                                <Link to={`/product/${id}`} onClick={this.handleClick}>
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

export default connect(null, mapDispatchToProps)(Bag);