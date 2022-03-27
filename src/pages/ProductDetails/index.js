import React from "react";
import ProductCard from "../../components/ProductCard";

class ProductDetails extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.productID;
            console.log(id);
        }
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
export default ProductDetails;