import React from 'react';
import PropTypes from 'prop-types';


const Generic = (props) => (
    <div className={`box ${props.classNames}`}>
        <h4>{props.label}</h4>
        <p>{props.value}</p>
    </div>
);



Generic.propTypes = {
    classNames: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

export default Generic;
