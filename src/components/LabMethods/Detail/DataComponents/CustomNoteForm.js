import React from 'react';
import {connect} from 'react-redux'
import {startAddCustomNote} from '../../../../actions/testActions';

class CustomNoteForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            department: '',
            customNote: this.isCustomNote()
        }
    }

    isCustomNote = () => {
        if (this.props.labmet.customNotes.length > 0) {
            return this.props.labmet.customNotes[0].customNote
        } else {
            return ''
        }
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => {
            return {[name]: value}
        });

    }

    customNoteSubmit = (e) => {
        e.preventDefault();
        this.props.startAddCustomNote(this.state, this.props.match.params.id)
    }
    
    render() {
        return (
                <form className='f_column customNote__form' onSubmit={this.customNoteSubmit}>
                    <label>{`Poznámka oddělení ${this.props.user} k metodě ${this.props.labmet.name}`} </label>
                    <textarea autoFocus cols='50' rows='4' name='customNote' value={this.state.customNote} placeholder='Zde napište svoji poznámku. Je viditelná pouze pro vás.' onChange={this.onChange}></textarea>
                   
                    <button>ULOŽIT</button>
                </form>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.user.nick,
        labmet: state.labTests.tests.find((item) => {
            return item._id === props.match.params.id
        })
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddCustomNote: (customNote_param, id_param) => {
            dispatch(startAddCustomNote(customNote_param, id_param))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomNoteForm);