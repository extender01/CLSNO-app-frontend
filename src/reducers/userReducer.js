const userReducerDefaultState = {
    user: {
        '_id': '',
        'nick': '',
        'rights': 'department',
    },
    isLogged: false,
    loading: true,
    error: null

};

const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {
    case 'LOGIN_BEGIN':
        return {...state, isLogged: false, loading: true, error: null};
    case 'LOGIN_FAILURE':
        return {...state, isLogged: false, loading: false, error: action.error};
    case 'LOGIN_SUCCESS':
        return {...state, isLogged: true, loading: false, error: null, user: action.user};

    case 'LOGGED_USER_BEGIN':
        return {...state, isLogged: false, error: null};
    case 'LOGGED_USER_FAILURE':
        return {...state, isLogged: false, loading: false, error: action.error};
    case 'LOGGED_USER_SUCCESS':
        return {...state, isLogged:action.isLogged, loading: false, error: null, user: action.user};

    case 'LOGOUT_BEGIN':
        return {...state, loading: true, error: null};
    case 'LOGOUT_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'LOGOUT_SUCCESS':
        return {...state, isLogged: false, loading: false, error: null, user: action.user};

    case 'SIGNUP_BEGIN':
        return {...state, isLogged: false, loading: true, error: null};
    case 'SIGNUP_FAILURE':
        return state;
    case 'SIGNUP_SUCCESS':
        return {...state, isLogged: true, loading: false, error: null};

    default:
        return state;
    }
};

export default userReducer;