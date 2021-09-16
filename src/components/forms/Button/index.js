import React from "react";
import './styles.scss';

class Button extends React.Component {
    render() {
        return(
            <button className="btn41-43 btn-42">
                {this.props.children}
            </button>
        );
    }
}
export default Button;

