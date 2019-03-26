import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {textFilter, searchAll, clearFilters, erFilter, statimFilter, additionalFilter} from '../../actions/filterActions';






class LabMetSearch extends React.Component {
   

    textFilter = (e) => {
        this.props.textFilter(e.target.value)
    }

    clearSearch = (e) => {
        e.preventDefault();
        this.props.textFilter('');
    }

    searchAll = () => {
        this.props.searchAll(!this.props.isSearchAll)
    }

    //checks redux state filters if they are applied, if not return value is true
    noFilters = () => {
        const { category, alphabet, statim, er, additional} = this.props.filters;
        return category === 'all' && !alphabet && !statim && !er && !additional;
    }
    
    clearFilters = () => {
        this.props.clearFilters();
    }
        
    
    
    render() {
        return (
            <div className='lm__search'>
                <div className='f_center lm__search_input'> 
                    <input  
                        className='lm__search_input_element' 
                        autoFocus 
                        type='search' 
                        name='search' 
                        value={this.props.text} 
                        placeholder='Hledat metodu' 
                        onChange={this.textFilter}>
                    </input>                   
                    
                    <img 
                        className='lm__search_img'
                        onClick={this.clearSearch} 
                        src={this.props.text ? '/images/cross.png' : '/images/search.png'}
                        height="40px" 
                    />

                </div>


                <div className={this.noFilters() ? 'lm__search--invisible ' : undefined}>
                   <p className='lm__search_clearFilter' onClick={this.clearFilters}><img src={'/images/cross.png'} height='12px' />HLEDAT VŠUDE</p> 
                </div>
                
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        text: state.labTests.filters.text,
        isSearchAll: state.labTests.filters.searchAll,
        filters: state.labTests.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        textFilter: (text_arg) => {
            dispatch(textFilter(text_arg));
        },
        searchAll: (isAll_arg) => {
            dispatch(searchAll(isAll_arg));
        },
        clearFilters: () => {
            dispatch(clearFilters())
            dispatch(erFilter(false));
            dispatch(additionalFilter(false));
            dispatch(statimFilter(false));
        }
    };
};

LabMetSearch.propTypes = {
    text: PropTypes.string,
    textFilter: PropTypes.func,
    searchAll: PropTypes.func,
    clearFilters: PropTypes.func,
    isSearchAll: PropTypes.bool,
    filters: PropTypes.object

};

export default connect(mapStateToProps, mapDispatchToProps)(LabMetSearch);
