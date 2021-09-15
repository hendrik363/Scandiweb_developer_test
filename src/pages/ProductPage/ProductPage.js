import React from 'react';
import Products from '../../components/Products';
import './styles.scss';

class ProductPage extends React.Component {
    render() {
        return (
            <div className="productpage">
                <Products />
            </div>
        );
    }
}

export default ProductPage;