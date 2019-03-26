import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {startDeleteTest} from '../../actions/testActions';

const LabMetDelete = (props) => (
    <div>
        <button onClick={() => {props.deleteTest(props.id)}}>SMAZAT METODU {props.id}</button>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTest: (id_arg) => {
            dispatch(startDeleteTest(id_arg));
        }
    };
};

LabMetDelete.propTypes = {
    deleteTest: PropTypes.func,
    id: PropTypes.string
};

export default connect(undefined, mapDispatchToProps)(LabMetDelete);