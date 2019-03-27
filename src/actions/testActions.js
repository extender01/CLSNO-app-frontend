import axios from 'axios';
import { history } from '../routers/AppRouter';


//=======================  ADD_TEST===================================================

export const addTestBegin = () => ({type: 'ADD_TEST_BEGIN'});
export const addTestFailure = (error = null) => ({type: 'ADD_TEST_FAILURE', error: error});
export const addTestSuccess = (test = {}) => {
    
    return {
        type: 'ADD_TEST_SUCCESS',
        addedTest: test
    };
};

/* normally dispatch function is called with object, when it is called with function as an argument
it is sensed by redux thunk which executes that function and appends dispatch function as an argument,
so we can dispatch action with plain object in this startAddTest function (appart from dispatch it can
also append getstate as second argument) */

/* SCHEME:  on form submit LabMetForm component calls method from AddTestPage (with args from form)via props...
..this method calls startAddTest (imported) but it calls it as argument via dispatch ...
..this activates redux thunk which invokes that method and via it, final dispatch of action object is executed */

                            
export const startAddTest = (test) => {
    return (dispatch) => {
        dispatch(addTestBegin());
        //this will get data from result of axios POST call (what is saved to mongodb) and is used to update redux via dispatch
        console.log('starting axios POST request to send new test to db');
        
        //this return is for jest testing in testActions.test.js - this returns original promise, which can be chained with .then where expect()... assertions are put
        return axios({
            method: 'post',
            url: process.env.API_URL + '/api/addtest',
            data: test
        }).then((result) => {
            // console.log('res z axios', result);
                          
            dispatch(addTestSuccess(result.data));
            console.log('successfully added to db and dispatched object with data from db to be saved to redux store');
            history.push('/metody');

        }).catch((e) => {
            console.log('something went wrong when saving data to db', e);
            //error from axios request is sent action object, then reducer saves error to store and component displays error via mapStateToProps
            dispatch(addTestFailure(e));
            history.push('/forbidden');
        });
    };
};

//=====================================EDIT TEST========================================================================================

const editTestBegin = () => ({type: 'EDIT_TEST_BEGIN'});
const editTestFailure = (error = null) => ({type: 'EDIT_TEST_FAILURE', error: error});
const editTestSuccess = ( id = '', updates = {}) => {
    
    return {
        type: 'EDIT_TEST_SUCCESS',
        updates,
        id
    };
};

                            
export const startEditTest = (id, updates) => {
    return (dispatch) => {
        console.log('updates are: ', updates);
        dispatch(editTestBegin());
        //this will get data from result of axios POST call (what is saved to mongodb) and is used to update redux via dispatch
        console.log('starting axios POST request to send new test to db');
        
        axios({
            method: 'patch',
            url: process.env.API_URL + '/tests/' + id,
            data: updates
        }).then((result) => {
            console.log('incoming updates', updates);

            console.log('res z axios', result);
                          
            dispatch(editTestSuccess(id, result.data));
            console.log('successfully added to db and dispatched object with data from db to be saved to redux store');
            history.goBack();

        }).catch((e) => {
            console.log('something went wrong when saving data to db', e);
            history.push('/forbidden');
            //error from axios request is sent action object, then reducer saves error to store and component displays error via mapStateToProps
            dispatch(editTestFailure(e));
        });
    };
};

//=======================================DELETE TEST ======================================================================

const deleteTestBegin = () => ({type: 'DELETE_TEST_BEGIN'});
const deleteTestFailure = (error) => ({type: 'DELETE_TEST_FAILURE', error});
const deletTestSuccess = (id) => ({type: 'DELETE_TEST_SUCCESS', id});

export const startDeleteTest = (id) => {
    return (dispatch) => {
        dispatch(deleteTestBegin());
        console.log('id k vymazani:', id);
        
        axios({
            method: 'delete',
            url: process.env.API_URL + '/tests/' + id,
        }).then((result) => {
            console.log('byla smazana metoda:', result.data.name);
            dispatch(deletTestSuccess(id));
            history.push('/metody');
        }).catch((e) => {
            console.log('neco se nepovedlo pri mazani metody');
            history.push('/forbidden');
            dispatch(deleteTestFailure(e));
            
        });
    };
};


//==================================SHOW ALL TESTS===================================================================================

const loadTestsBegin = () => ({type: 'LOAD_TESTS_BEGIN'});
const loadTestFailure = (error = null) => ({type: 'LOAD_TESTS_FAILURE', error: error});
const loadTestsSuccess = (tests = []) => {
    return {
        type: 'LOAD_TESTS_SUCCESS',
        allTests: tests
    };
};

export const startLoadTests = () => {
    return (dispatch) => {
    
        dispatch(loadTestsBegin());
        axios.get(process.env.API_URL + '/get-all').then((result) => {
          
            console.log('uspesne nacteny testy', result.data);
            dispatch(loadTestsSuccess(result.data));
            // callback()
    
        }).catch((e) => {
            console.log('error pri loadovani testu');
            dispatch(loadTestFailure(e));
            // dispatch(loadTestsSuccess());
            
            
        });
    };
};


//===============  ADD / EDIT CUSTOM NOTE =============================================

const addCustomNoteBegin = () => ({type: 'ADD_CUSTOM_NOTE_BEGIN'});
const addCustomNoteFailure = (error) => ({type: 'ADD_CUSTOM_NOTE_FAILURE', error});
const addCustomNoteSuccess = (_id, customNotes) => {
    return {
        type: 'ADD_CUSTOM_NOTE_SUCCESS',
        _id,
        customNotes
    };
};

export const startAddCustomNote = (passedNote, passedId) => {
    return (dispatch) => {
       
        dispatch(addCustomNoteBegin());
        axios.post(process.env.API_URL + '/customNote/' + passedId, passedNote).then((result) => {
            console.log('result customNote z axiosu je:', result);
            dispatch(addCustomNoteSuccess(result.data._id, result.data.customNotes));
            history.goBack();
        }).catch((err) => {
            console.log(err);
            dispatch(addCustomNoteFailure(err));
            history.push('/forbidden');
            
        });
    };
};



           
            
        
    
