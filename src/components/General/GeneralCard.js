import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';



const GeneralCard = (props) => (
    <div className='general__card'>
        <Link to={props.cardLink}>
        
            <img src={props.cardImg} />
            <h2>{props.cardHead}</h2>
            <p>{props.cardText}</p>
        </Link>
    </div>
    
);


GeneralCard.propTypes = {
    cardLink: PropTypes.string,
    cardImg: PropTypes.string,
    cardHead: PropTypes.string,
    cardText: PropTypes.string
};

export default GeneralCard;