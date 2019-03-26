import React from 'react';
import PropTypes from 'prop-types';

import DrawMistakesWhat from './DrawMistakesWhat';
import DrawMistakesHow from './DrawMistakesHow';
import DrawMistakesCons from './DrawMistakesCons';

const DrawMistakesItem = (props) => (
    <div className='draw__mistakes__item'>
        <div className='general__line'>
            <DrawMistakesWhat item={props.item}/>
            <DrawMistakesHow item={props.item}/>
        </div>
        <div className='general__line'>
            <DrawMistakesCons item={props.item} />
        </div>



    </div>
);

DrawMistakesItem.propTypes = {
    item: PropTypes.object
};

export default DrawMistakesItem;