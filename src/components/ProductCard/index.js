import React from "react";
import productThumbnail from './../../assets/product.jpg';

class ProductCard extends React.Component {
    render() {
        return(
            <div className="productcard">
                <div className="hero">
                    <img src={productThumbnail} />
                </div>
            </div>
        );
    }
}
export default ProductCard