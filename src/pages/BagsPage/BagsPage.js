import React from 'react';
import './styles.scss';
import Bags from "../../components/Bags";

class BagsPage extends React.Component {
    render() {
        return(
            <div className="bags">
                <Bags />
            </div>
        )
    }
}

export default BagsPage;