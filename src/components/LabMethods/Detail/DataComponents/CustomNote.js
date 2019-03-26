import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

// default fallback object (empty object) must be set when props are destructured: {name, age} = {}, setting default values is not enough...
//..beacuse destructured parameters are always required. Here when department has no custom note, then error would be thrown

// here props object is props: {customNote: {customNote, department}, label, _id, user} something from redux and some from parrent component

// Whole component will render only if rights is set to department (condition in LabMetGeneric component)
// custom note with Link to change/add will render only if user.nick in redux is not nobody (means somebody is logged), if it is nobody then message is set
const CustomNote = ({customNote: {customNote = null} = {}, user, ...otherProps } = {}) => (
    
    <div className={`box ${otherProps.classNames}`}>
        
        <div className='f_center '>
            <h4>POZNÁMKA ODDĚLENÍ {( user !== 'nobody'  &&  user)}</h4> 
            {user !== 'nobody' && <Link to={{
                pathname: '/customNote/' + otherProps._id,
                jmeno: otherProps.label
            }}>
                <img className='customNote__link' src={'/images/pencil-edit-button.png'} />
            </Link>}
        </div>
        
        {/*if someone is logged then.... else ...*/}
        {user !== 'nobody' ?
            <p>{customNote}</p>
            :
            <p>Pro přidání / zobrazení vaší poznámky se musíte přihlásit</p>
        }
    </div>
);

const mapStateToProps = (state) => ({user: state.users.user.nick});

export default connect(mapStateToProps)(CustomNote);



