import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import LabMetForm from './LabMetForm';
import LabMetDelete from './LabMetDelete';
import { startEditTest } from '../../actions/testActions';

//When clicked on submit button, formSubmit method is called in LabMetForm, with current component state object as parameter. That state object gets passed here as formData parameter...
//..for onClickEditFunction which calls startEditTest with parameters of id (found in redux based on id in url - by function in mapStateToProps, we could use id from URL directly...
//but we would not know if test in redux exist, this way we do) and data from form. This function makes dispatch action to save updates to db and update redux as well 

class EditTestPage extends React.Component {
    
    onClickEdit = (formData) => {
        console.log('formData', formData);
        this.props.startEditTest(this.props.particularTest._id, formData) 
    }

    render() {
        return (
            <React.Fragment>
                <LabMetForm new={false} labMetToEdit={this.props.particularTest} formSubmit={this.onClickEdit}  />
                {this.props.particularTest ? <LabMetDelete id={this.props.particularTest._id}/> : <p>ahoj</p>}
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        particularTest: state.labTests.tests.find((item) => item._id === ownProps.match.params.id),
        loading: state.labTests.loading,
        error: state.labTests.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startEditTest: (id_arg, test_arg) => {
            dispatch(startEditTest(id_arg, test_arg));
        }
    };
};

EditTestPage.propTypes = {
    startEditTest: PropTypes.func,
    particularTest: PropTypes.object,
};


export default connect(mapStateToProps, mapDispatchToProps)(EditTestPage);
