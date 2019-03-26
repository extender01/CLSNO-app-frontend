import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LabMetInternal from './LabMetInternal';
import LabMetGeneric from './LabMetGeneric';
import LabMetExternal from './LabMetExternal';
import LabMetCalculated from './LabMetCalculated';

const LabMetDetail = ({lm, rights, location}) => (

    //until props are loaded from redux, do not render any test details
    <div className='ld'>
        {!!lm && 
            <React.Fragment>
                <LabMetGeneric lm={lm} rights={rights} />                       
                
                {location.state === 'external' && (
                    <LabMetExternal lm={lm} rights={rights} />
                )}
                {location.state === 'internal' && (

                    <LabMetInternal lm={lm} />
                )}
                {location.state === 'calculated' && (

                    <LabMetCalculated lm={lm} />
                )}
            </React.Fragment>
        }
    </div>
        
);

//function returns single object from array that matches id from req.params - finds data for particular test to display details
const findParticular = (state, props) => {
    
    return state.labTests.tests.find((item) => {
        if (item._id) {
            return item._id === props.match.params.id;
        } 
    });
};

const mapStateToProps = (state, props) => {
    return {
        // lm = lab method
        lm: findParticular(state, props),
        rights: state.users.user.rights
    };
};

LabMetDetail.propTypes = {
    lm: PropTypes.object,
    rights: PropTypes.string,
    location: PropTypes.object
};

export default connect(mapStateToProps)(LabMetDetail);

