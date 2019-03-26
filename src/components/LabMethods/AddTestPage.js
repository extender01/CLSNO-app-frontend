import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LabMetForm from './LabMetForm';
import { startAddTest } from '../../actions/testActions';


const AddTestPage = (props) => (
    <React.Fragment>
        {props.error &&   <p>{props.error.message}</p>}
        <LabMetForm new={true} formSubmit={props.startAddTest} />
    </React.Fragment>
);



const mapStateToProps = (state) => {
    return {
        error: state.labTests.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddTest: (test) => {
            dispatch(startAddTest(test));
        }
    };
};

AddTestPage.propTypes = {
    error: PropTypes.string,
    startAddTest: PropTypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(AddTestPage);

