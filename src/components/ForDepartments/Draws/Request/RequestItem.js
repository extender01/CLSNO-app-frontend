import React from 'react';
import PropTypes from 'prop-types';


const RequestItem = (props) => (
    <div className='request__item'>
        <h2>{props.info.head}</h2>
        
        {props.info.text.map((item, index) => (
            <div className='request__item__text' key={index}>
                {props.image && <img src={`/images/${props.image}`} alt='žádanka musí obsahovat' />}
                <p>{item}</p>
            </div>
        ))}
        
    </div>
);

RequestItem.propTypes = {
    info: PropTypes.shape({
        head: PropTypes.string,
        text: PropTypes.array
    }),
    image: PropTypes.string
};


export default RequestItem; 