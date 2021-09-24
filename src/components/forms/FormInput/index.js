import React from "react";
import './styles.scss'


class FormInput extends React.Component {

    render() {
        var label = this.props.label;
        var type = this.props.type;
        var placeholder =this.props.placeholder;
        return(
            <div className="formRow">
                {label && (
                    <label>{label}</label>
                )}
                <input placeholder={placeholder} type={type} value={this.props.value} onChange={this.props.handleChange}/>
            </div>
        );
    }
}
export default FormInput;