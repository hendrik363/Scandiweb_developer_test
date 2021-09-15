import react from "react";
import { Link } from "react-router-dom";
import './styles.scss'

class Header extends react.Component {
    render() {
        return (
            <header className="header">
                <div className="wrap">
                    <div className="callToActions">
                        <ul>
                            <li>
                                <Link to="/products">
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;