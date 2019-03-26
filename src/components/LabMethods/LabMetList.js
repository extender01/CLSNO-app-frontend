import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LabMetItem from './LabMetItem';
import labMetSelector from '../../selectors/labMetSelector';

const LabMetList = (props) => (
    <div className='lm__methods'>
        
    
        {
            props.labTests.length === 0 ? (
                <React.Fragment>
                    <h2>Laboratorní metody nenalezeny</h2>
                </React.Fragment>
            ) : (
                props.labTests.map((labTest) => {
                    return <LabMetItem key={labTest._id} {...labTest} />;
                })
            )
        }
    </div>

);

const mapStateToProps = (state) => {
    return {
        labTests: labMetSelector(state.labTests.tests, state.labTests.filters),
    };
};

LabMetList.propTypes = {
    labTests: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(LabMetList);

