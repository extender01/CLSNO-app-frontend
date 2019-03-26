import React from 'react';
import PropTypes from 'prop-types';

const TransportItem = (props) => (
    <div className='transport__item'>
        {/* <img src={props.transport.img} />*/}
        <h3>{props.transport.head}</h3>
        <p>{props.transport.text}</p>
    </div>

);

TransportItem.propTypes = {
    transport: PropTypes.shape({
        img: PropTypes.string,
        head: PropTypes.string,
        text: PropTypes.string
    })
};

export default TransportItem;


