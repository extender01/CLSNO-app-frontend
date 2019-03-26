import React from 'react';
import PropTypes from 'prop-types';

const DrawMistakesHow = (props) => (
    <div className='draw__mistakes__how'>
        <h2>Jak k tomu dojde?</h2>
        
        {props.item.how && props.item.how.map((arrItem, index) => (
            <div key={index} className='draw__mistakes__how__item'>
                {arrItem.howImg ? <div className='draw__mistakes__how__img' >
                    <img src={arrItem.howImg} />
                </div> : undefined }
                <div className='draw__mistakes__how__text'>
                    <h4>{arrItem.howHeading}</h4>
                    <p>{arrItem.howText}</p>
                </div>
            </div>
        ))}
    </div>
);

DrawMistakesHow.propTypes = {
    item: PropTypes.shape({
        how: PropTypes.array
    })
};

export default DrawMistakesHow;