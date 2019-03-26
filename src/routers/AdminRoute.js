import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({
    rights,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        rights === 'admin' ? (
            <Component {...props} />
        ) : (
            <Redirect to='/' />
        )
    )} />
);
 

const mapStateToProps = (state) => ({
    rights: state.users.user.rights
});

export default connect(mapStateToProps)(AdminRoute);