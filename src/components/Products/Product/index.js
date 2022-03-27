import React from "react";
import './../styles.scss';
import Button from './../../forms/Button';
import { Link } from 'react-router-dom';


class Product extends React.Component {

    render() {
        
        const configAddToCardBtn = {
            type: 'button'
        };
        const productName = this.props.productName;
        const productId = this.props.productId;
        const productPic = this.props.productPic;
        return (
            <div className="product" key={productId}>
                
                <div className="thumb">
                    <Link to={`/product/${productId}`}>
                        <img src={productPic[0]} alt={productPic} />
                        <div className="overlay">
                            <div className="overpic"></div>
                        </div>
                    </Link>
                </div>

                <div className="details">
                    <ul>
                        <li>
                            <span className="name">
                                <Link to={`/product/${productId}`}>
                                    {productName}
                                </Link>
                            </span>
                        </li>
                        <li>
                            <span className="price">
                                {this.props.productPrice}
                            </span>
                        </li>
                        <li>
                            <div className="addToCart">
                                <Button {...configAddToCardBtn}>
                                    Add to card
                                </Button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Product;