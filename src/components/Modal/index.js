import React from "react";
import './styles.scss';

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
                        <button className="toggle-button" onClick={this.onClose}>
                            close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Modal;