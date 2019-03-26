import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {startLoggedUser }from '../../actions/userActions';

class AdminHeader extends React.Component {
    
    render() {
        return (
            <div className='f  admin-header'>
                <NavLink to='/create'>Vytvořit metodu</NavLink>
                <NavLink to='/signup'>Vytvořit uživatele</NavLink>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nick: state.users.user.nick
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkWhoIsLogged: () => {
            dispatch(startLoggedUser());
        }
    };
};

AdminHeader.propTypes = {
    checkWhoIsLogged: PropTypes.func,
    nick: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);