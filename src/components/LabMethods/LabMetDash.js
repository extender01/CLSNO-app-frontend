import React from 'react';
import {connect} from 'react-redux';

import LabMetList from './LabMetList';
import LabMetCategory from './LabMetCategory';
import LabMetSearch from './LabMetSearch';
import {startLoadTests} from '../../actions/testActions';




class LabMetDash extends React.Component {
    constructor(props) {
        super(props);
        
        

    }

    componentDidMount() {
        // this.props.loadTests();
        

    }

    render() {
        return (
            <div className='lm__container'>
                <div className='lm'>
                    {this.props.labTestsError === null ?
                        <React.Fragment>
                            <LabMetSearch />
                            <LabMetCategory />
                            <LabMetList />
                        </React.Fragment>
                        : 
                        <h2>nelze se spojit s db</h2>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        labTestsError: state.labTests.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTests: () => {
            dispatch(startLoadTests());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(LabMetDash);


