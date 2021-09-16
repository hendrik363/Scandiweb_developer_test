import React from "react";
import './styles.scss';

class AddButton extends React.Component {
    render() {
        return(
            <button className="btn43-44 btn-45">
                {this.props.children}
            </button>
        );
    }
}
export default AddButton;
