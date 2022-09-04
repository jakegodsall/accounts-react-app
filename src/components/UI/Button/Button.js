import React from 'react';

import './Button.css';

const Button = props => {

    return (
        <button className="btn">{props.buttonContent}</button>
    );
};

export default Button;