import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {startLogin} from '../actions/userActions';
import LogoutForm from './LogoutForm';
import CredentialsForm from './CredentialsForm';




const LoginPage = (props) => (
    <React.Fragment>       
        
        {!props.isLogged ? 
            
            <CredentialsForm formSubmit={props.startLogin} isLogged={props.isLogged} buttonName='LOGIN' />  
            :
            <div className='f_column credentials'> 
                <h2>Přihlášen jako: {props.user}</h2>
                <LogoutForm />
            </div>
        }
        
    </React.Fragment>
);


const mapStateToProps = (state) => ({isLogged: !!state.users.user._id, user: state.users.user.nick});

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (credentials) => {
            dispatch(startLogin(credentials));
        }
    };
};

LoginPage.propTypes = {
    isLogged: PropTypes.bool,
    startLogin: PropTypes.func,
    user: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


