import React from 'react';
import "./Wrapper.css";
// This will render the card images. Styles are being imported. Each component has its own styles
const Wrapper = props => (
	<div className="wrapperContainer">
        {props.children}
    </div>
);

export default Wrapper;
