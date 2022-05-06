import react from "react";
import { Link } from "react-router-dom";
import Logo from './../../assets/logo.png';
import './styles.scss';

class Header extends react.Component {
    render() {
        return (
            <header className="header">
                <div className="wrap">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Deepsites" />
                        </Link>
                    </div>
                    <div className="callToActions">
                        <ul>
                            <li>
                                <Link to="/products">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/bags">
                                    Bags
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