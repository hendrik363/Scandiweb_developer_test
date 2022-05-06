import React from 'react';
import './styles.scss';
import picture from '../../assets/product.jpg';
import { Link } from "react-router-dom";

class MensClothes extends React.Component {
    render() {
        return (
            <div className="homepage">
                <img src={picture} alt="homepage img"/>
                <div className="middle">
                    <Link to="/products">
                        <button className="btn btn-ani">Continue to product page</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default MensClothes;