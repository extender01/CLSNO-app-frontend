import React from 'react';
import PropTypes from 'prop-types';

import {alphabetFilter} from '../../actions/filterActions';
import {connect} from 'react-redux';

const alphabet = ['0-9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


const LabMetAlphabet = (props) => (
    <div className='fcrw lm__abc'>
        <button className={props.active === '' ? 'lm__abc--active' : undefined} name='' onClick={(e) => {props.alphabetFiltering(e.target.name)}}>VSE</button>
        {alphabet.map((item) => (
            <button className={props.active === item ? 'lm__abc--active' : undefined} key={item} name={item} onClick={(e) => {props.alphabetFiltering(e.target.name)}}>{item}</button>
       
        ))}
   
    </div>
   
);

const mapStateToProps = (state) => {
    return {
        active: state.labTests.filters.alphabet
    };
};



const mapDispatchToProps = (dispatch) => {
    return {
        alphabetFiltering: (letter) => {
            dispatch(alphabetFilter(letter));
        }
    };

};

LabMetAlphabet.propTypes = {
    active: PropTypes.string,
    alphabetFiltering: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LabMetAlphabet);