import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const LabMetItem = (props) => (
    <div  className={`lm__item lm__${props.category}`}>
        
       
        {/* if filtering text exists in redux, check if that searched text string is contained in name of labTest, if so then apply class to div*/}
        <div className={(props.textFilter && props.name.toLowerCase().includes(props.textFilter.toLowerCase())) ? 'lm__item--found' : undefined}>

            {props.category === 'external' && (
                <Link to={{
                    pathname: '/metody/detail/' + props._id,
                    state: 'external' 
                }}>
                    {props.name}
                </Link>

            )}

            {props.category === 'internal' && (
                <Link to={{
                    pathname: '/metody/detail/' + props._id,
                    state: 'internal' 
                }}>
                    {props.name}
                </Link>

            )}

            {props.category === 'calculated' && (
                <Link to={{
                    pathname: '/metody/detail/' + props._id,
                    state: 'calculated' 
                }}>
                    {props.name}
                </Link>

            )}


        </div>

        <div className={(props.textFilter && props.syn.toLowerCase().includes(props.textFilter.toLowerCase())) ? 'lm__item--found' : undefined}>
            <p>{props.syn}</p>
        </div>

        <div>
            <Link to={'/edit/' + props._id}>{props.where}</Link>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        textFilter: state.labTests.filters.text
    };
};

LabMetItem.propTypes = {
    category: PropTypes.string,
    textFilter: PropTypes.string,
    name: PropTypes.string,
    syn: PropTypes.string,
    where: PropTypes.string,
    _id: PropTypes.string
};


export default connect(mapStateToProps)(LabMetItem);

