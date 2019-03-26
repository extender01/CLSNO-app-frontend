import React from 'react';
import CredentialsForm from './CredentialsForm';
import {startSignup} from '../actions/userActions';

import {connect} from 'react-redux';



const SignupPage = (props) => (
    <CredentialsForm formSubmit={props.startSignup} buttonName='create user' />
);

const mapDispatchToProps = (dispatch) => {
    return {
        startSignup: (credentials) => {
            dispatch(startSignup(credentials));
        }
    };
};

export default connect(undefined, mapDispatchToProps)(SignupPage);