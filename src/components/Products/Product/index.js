import React from "react";
import productThumbnail from './../../../assets/product.jpg';

class Product extends React.Component {
    render() {
        return (
            <div className="product" key={this.props.productId}>
                <div className="thumb">
                    <img src={productThumbnail} alt={this.props.productName} />
                </div>

                <div className="details">
                    <ul>
                        <li>
                            <span className="name">
                                {this.props.productName}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Product;