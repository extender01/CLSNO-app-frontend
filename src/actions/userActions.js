import axios from 'axios';
import { history } from '../routers/AppRouter';





//========================LOGIN==========================================================

const loginBegin = () => ({type: 'LOGIN_BEGIN'});
const loginFailure = (error = null) => ({type: 'LOGIN_FAILURE', error: error});
const loginSuccess = (user = {}) => {
    return {
        type: 'LOGIN_SUCCESS',
        user: {
            _id: user._id,
            nick: user.nick,
            rights: user.rights
        }
    };
};

export const startLogin = (credentials) => {

    return (dispatch) => {
        dispatch(loginBegin());
       
        axios({
            method: 'post',
            url: process.env.API_URL + '/login',
            data: {
                nick: credentials.nick,
                password: credentials.password
            }}
        ).then((result) => {
            
            console.log('tohle se vraci z api po loginu', result.data);
             
            dispatch(loginSuccess(result.data));
            history.push('/metody');
              
        }).catch((e) => {
            console.log('neco se pokazilo,', e);
            dispatch(loginFailure(e));
        });
    };
};


//========================SIGNUP=======================================================

const signupBegin = () => ({type: 'SIGNUP_BEGIN'});
const signupFailure = (error = null) => ({type: 'SIGNUP_FAILURE', error: error});
const signupSuccess = () => {
    return {
        type: 'SIGNUP_SUCCESS'
    };
};

export const startSignup = (credentials) => {

    return (dispatch) => {
        dispatch(signupBegin());
       
        axios({
            method: 'post',
            url: process.env.API_URL + '/adduser',
            data: {
                nick: credentials.nick,
                password: credentials.password,
                rights: credentials.rights
                
            }}
        ).then((result) => {
            
            console.log('co se vraci z db po uspesnem signuppu usera', result.data);
            
            dispatch(signupSuccess(result.data));
            history.push('/metody');
              
        }).catch((e) => {
            console.log('neco se pokazilo,', e);
            dispatch(signupFailure(e))
        });
    };
};


//==================WHO IS LOGGED USER==========================================================

//checks in db who is owner of x-auth cookie and sends back nick and id info (and stores them to redux)
const loggedUserBegin = () => ({type: 'LOGGED_USER_BEGIN'});
const loggedUserFailure = (error = null) => ({type: 'LOGGED_USER_FAILURE', error: error});

export const loggedUserSuccess = (APIres = {user: {_id: '', nick: 'nobody', rights: 'department'}}) => {
    if (APIres) {
        console.log(APIres);
        
        return {
            type: 'LOGGED_USER_SUCCESS',
            user: {
                _id: APIres.user._id,
                nick: APIres.user.nick,
                rights: APIres.user.rights
            },
            isLogged: APIres.user._id ? true : false
            
        };
    } 
};





export const startLoggedUser = (callback) => {
    return (dispatch) => {
        dispatch(loggedUserBegin());


        //checks if client has cookie with token, if yes then that user is returned as result of GET request, if not only string that says nobody is logged is returned
        axios.get(process.env.API_URL +  '/me').then((result) => {
            console.log('co posila api:', result.data);
            
            dispatch(loggedUserSuccess(result.data));
            callback()
            
        }).catch((e) => {
            console.log('error pri loadovani useru');
            dispatch(loggedUserSuccess({user: {nick: 'nobody', rights: 'department', _id: ''}}));
            callback()
            
            
            
        });
       
            
        
    };
};





//============================LOGOUT======================================================
const logoutBegin = () => ({type: 'LOGOUT_BEGIN'});
const logoutFailure = (error) => ({type: 'LOGOUT_FAILURE', error: error});
const logoutSuccess = () => {
    return {
        type: 'LOGOUT_SUCCESS',
        user: {
            _id: '',
            nick: 'nobody',
            rights: 'department'
        }
    };
};

export const startLogout = () => {
    return (dispatch) => {
        dispatch(logoutBegin());
        console.log('zacina logout');
        
        axios.delete(process.env.API_URL + '/logout')
            .then(() => {
                console.log('uspesne smazano');
                dispatch(logoutSuccess());
                history.push('/metody');
            
            }).catch((e) => {
                console.log('error z catch actions', e);
            
                dispatch(logoutFailure(e));
            });
    };
};




