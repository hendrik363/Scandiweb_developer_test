import React from "react";
import './styles.scss'

class FormInput extends React.Component {
    render() {
        var label = this.props.label;
        return(
            <div className="formRow">
                {label && (
                    <label>{label}</label>
                )}
                <input type="text" value={this.props.value}/>
            </div>
        );
    }
}
export default FormInput;