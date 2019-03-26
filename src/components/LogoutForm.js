import React from 'react';
import {connect} from 'react-redux';

import { startLogout } from '../actions/userActions';

class LogoutForm extends React.Component {
   
    logout = (e) => {
        e.preventDefault();
        this.props.startLogout();
        

    };
    render() {
        return (
            <button onClick={this.logout}>LOGOUT</button>
        )
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => {
          dispatch(startLogout())
        }
    };
};

export default connect(undefined, mapDispatchToProps)(LogoutForm);