import React from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';

import {categoryFilter, statimFilter, erFilter, additionalFilter, clearFilters, groupFilter} from '../../actions/filterActions';
import LabMetFilterTrigger from './LabMetFilterTrigger';
import LabMetAlphabet from './LabMetAlphabet';

const LabMetCategory = (props) => (
    <React.Fragment>
        
        <div className='lm__cat'>
            <button className={props.active === 'all' ? 'lm__cat-active': undefined} name='all' onClick={() => {props.clearAllFilters()}} >VŠECHNY</button>
            <button className={props.active === 'internal' ? 'lm__cat-active' : undefined} name='internal' onClick={(e) => {props.categoryFilter(e.target.name)}} >INTERNÍ</button>
            <button className={props.active === 'external' ? 'lm__cat-active' : undefined} name='external' onClick={(e) => {props.categoryFilter(e.target.name)}} >EXTERNÍ</button>

        </div>
        <Collapsible trigger='Další filtry'>
            <Collapsible trigger={<LabMetFilterTrigger heading='PROVOZ' />} classParentString='lm__collapsible__filters'>


                <div className='lm__cat'>
                    <button className={props.statim === true ? 'lm__cat-active' : undefined} name='stat' onClick={() => {props.statimFilter(!props.statim)}} >STATIM</button>
                    <button className={props.er === true ? 'lm__cat-active' : undefined} name='er' onClick={() => {props.erFilter(!props.er)}} >POHOTOVOST</button>
                    <button className={props.additional === true ? 'lm__cat-active' : undefined} name='additional' onClick={() => {props.additionalFilter(!props.additional)}} >DOHLASKA</button>

                </div>

            </Collapsible>

            <Collapsible trigger={<LabMetFilterTrigger heading='KATEGORIE A SKUPINY' />} classParentString='lm__collapsible__filters'>


                <div className='lm__cat'>
                    <button className={props.groups === 'zaklad' ? 'lm__cat-active' : undefined} name='groups' onClick={() => groupSelector(props, 'zaklad')} >Základní panel</button>
                    <button className={props.groups === 'jatra' ? 'lm__cat-active' : undefined} name='groups' onClick={() => groupSelector(props, 'jatra')} >Vyšetření jater</button>
                    <button className={props.groups === 'ledviny' ? 'lm__cat-active' : undefined} name='groups' onClick={() => groupSelector(props, 'ledviny')}>Vyšetření ledvin</button>

                </div>

            </Collapsible>    
            
            
            <Collapsible trigger={<LabMetFilterTrigger heading='ABECENDĚ' />} classParentString='lm__collapsible__filters'>
                <LabMetAlphabet />
            </Collapsible>
        </Collapsible>

    
    </React.Fragment>
);


const mapStateToProps = (state) => {
    return {
        active: state.labTests.filters.category,
        statim: state.labTests.filters.statim,
        er: state.labTests.filters.er,
        additional: state.labTests.filters.additional,
        groups: state.labTests.filters.groups
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        categoryFilter: (category) => {
            dispatch(categoryFilter(category));
        },
        clearAllFilters: () => {
            dispatch(clearFilters());
            dispatch(erFilter(false));
            dispatch(additionalFilter(false));
            dispatch(statimFilter(false));
        },
        statimFilter: (statim) => {
            dispatch(statimFilter(statim));
            dispatch(erFilter(false));
            dispatch(additionalFilter(false));
        },
        erFilter: (er) => {
            dispatch(erFilter(er));
            dispatch(statimFilter(false));
            dispatch(additionalFilter(false));

        },
        additionalFilter: (additional) => {
            dispatch(additionalFilter(additional));
            dispatch(statimFilter(false));
            dispatch(erFilter(false));
        },
        groupFilter: (group) => {
            dispatch(groupFilter(group));
        }
       

    };
};

// checks if there is applied group filter in redux state (in props via mapStateToProps) and if its equal to passed value (keyword, that means that same button for group was clicked second time) - if that is true filter is reset to ''
//if passed keyword is different (group button clicked for first time or after DIFFERENT button, then filer is set to that keyword)
// props are passed because this fuction is outside of component and doesnt have access via HOC from connect redux
const groupSelector = (props, keyword) => {
    if(props.groups === keyword) {
        props.groupFilter('');
    } else {
        props.groupFilter(keyword);
    }
};

LabMetCategory.propTypes = {
    active: PropTypes.string,
    clearAllFilters: PropTypes.func,
    categoryFilter: PropTypes.func,
    statim: PropTypes.bool,
    er: PropTypes.bool,
    additional: PropTypes.bool,
    statimFilter: PropTypes.func,
    erFilter: PropTypes.func,
    additionalFilter: PropTypes.func,
    groupFilter: PropTypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(LabMetCategory)

