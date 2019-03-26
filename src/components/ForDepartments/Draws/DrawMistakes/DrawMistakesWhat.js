import React from 'react';
import PropTypes from 'prop-types';

const DrawMistakesWhat = (props) => (
    
    <div className='draw__mistakes__what'>
        <h2>Proč je to problém?</h2>
        <img src={props.item.whatImg} />
        <p>{props.item.whatText}</p>

        
    </div>
);

DrawMistakesWhat.propTypes = {
    item: PropTypes.shape({
        whatImg: PropTypes.string,
        whatText: PropTypes.string
    })
};
export default DrawMistakesWhat;