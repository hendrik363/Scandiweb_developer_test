import React from 'react';
import './styles.scss';
import picture from '../../assets/product.jpg';

class MensClothes extends React.Component {
    render() {
        return(
            <div className="homepage">
                <img src={picture}/>
            </div>
        );
    }
}

export default MensClothes;