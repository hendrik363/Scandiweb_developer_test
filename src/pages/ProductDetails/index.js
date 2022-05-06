import React from "react";
import ProductCard from "../../components/ProductCard";
import { connect } from "react-redux";

class ProductDetails extends React.Component {
    render() {
        let id = this.props.match.params.productID;
        const configProductDetails = {
            id
          };
        return(
            
            <div>
                <ProductCard {...configProductDetails}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.productData.product
    }
}

export default connect(mapStateToProps)(ProductDetails);