import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';

const Header = (props) => {

    const renderBackButton = () => {
        if (props.back === true) {
            return (
                <Link to="/" className="back-button">Back</Link>
            )
        }
    }

    return (
        <div className="header-container">
            {renderBackButton()}
            {props.title}
        </div>
    )
}

export default Header;