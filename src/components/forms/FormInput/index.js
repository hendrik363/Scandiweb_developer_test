import React from "react";

class FormInput extends React.Component {
    render() {
        return(
            <div>
                <label>{this.props.label}</label>
                <input type="text" value={this.props.value}/>
            </div>
        );
    }
}
export default FormInput;