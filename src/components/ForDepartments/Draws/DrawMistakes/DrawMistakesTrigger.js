import React from 'react';
import PropTypes from 'prop-types';

//nested destructuring
const DrawMistakesTrigger = ({box: {heading, image, text}}) => (
    <div className='draw__mistakes__header'>
        
        <img src={image} />
        <div className='draw__mistakes__header__description'>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </div>
);


DrawMistakesTrigger.propTypes = {
    box: PropTypes.shape({
        heading: PropTypes.string,
        image: PropTypes.string,
        text: PropTypes.string
    }) 
};

export default DrawMistakesTrigger;  