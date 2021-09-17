import React from "react";
import './styles.scss';
import Button from './../forms/Button';

class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modalOverlay">
                <div className="modalWrap">
                    <div className="modal">
                        {this.props.children}
                        <div onClick={this.onClose}>
                        <Button className="toggle-button" >
                            close
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Modal;