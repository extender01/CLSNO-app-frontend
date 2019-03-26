import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Media from 'react-media';

import Hamburger from './Hamburger';
// import {startLoggedUser }from '../../actions/userActions';
import {startLoadTests} from '../../actions/testActions';
import bp from '../../helper/mediaQueryBreakPoint';










class MainHeader extends React.Component {
    // state = {  }

    componentDidMount() {
        this.props.startLoadTests();

    }

    render() {
        return (
            <div className='header'>
                
                <div className='f header__line'>
        
                    {/* Media will render Hamburger only if width of viewport is less value of bp variable */}
                    <Media query={`(max-width: ${bp})`}>
                        {(matches) => 
                            matches ? <Hamburger /> : null
                        }
                    </Media> 
                    
                    <nav className='f_start-end-toggle header__logo'>
                        <NavLink className='header__title' to='/' exact={true}>
                            <img src={'/images/SNO_400W.png'} height='40px' />
                        </NavLink>
                    </nav>
                    
                    <div className ='f header__links'>
                        <HashLink to='/#o-laboratori' className='g1'>O laboratoři</HashLink>
                        <HashLink to='/#pacienti' className='g1'>Pro pacienty</HashLink>
                        <HashLink to='/#oddeleni' className='g1'>Pro oddělení</HashLink>
                        <Link to='/metody' className='g1'>Metody</Link>
                        <HashLink to='/#kontakt' className='g1'>Kontakty</HashLink>
                        
                    </div>
        
                    <div className='header__user'>
                        {this.props.isLogged ? (
                            <React.Fragment>
                                <div className='f_column'>
                                    <img src={'/images/user.png'} height='20px' />
                                    <p >{this.props.nick}</p>
                                </div>
                                <Link to='/login'>Odhlásit se</Link>
                            </React.Fragment>
                        ) : (
                            <div className='f_column g1'>
                                <Link to='/login'>Přihlásit se</Link>
                            </div>
                        )}
                    </div>
                </div> 
            </div>
        );
    }
}






const mapStateToProps = (state) => {
    return {
        nick: state.users.user.nick,
        isLogged: state.users.isLogged
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // checkWhoIsLogged: () => {
        //     dispatch(startLoggedUser());
        // },
        startLoadTests: () => {
            dispatch(startLoadTests());
        }
        
    };
};

MainHeader.propTypes = {
    checkWhoIsLogged: PropTypes.func,
    startLoadTests: PropTypes.func,
    nick: PropTypes.string,
    isLogged: PropTypes.bool
};



export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);