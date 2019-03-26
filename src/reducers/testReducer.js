const testReducerDefaultState = {
    tests: [],
    loading: false,
    error: null,
    filters: {
        alphabet: '',
        category: 'all',
        text: '',
        statim: false,
        er: false,
        additional: false,
        groups: ''
    }
};

const testReducer = (state = testReducerDefaultState, action) => {
    switch (action.type) {
    case 'ADD_TEST_BEGIN':
        return {...state, loading: true, error: null};
    case 'ADD_TEST_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'ADD_TEST_SUCCESS':
        return {...state, loading: false, error: null,  tests: [...state.tests, action.addedTest]};

    case 'EDIT_TEST_BEGIN':
        return {...state, loading: true, error: null};
    case 'EDIT_TEST_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'EDIT_TEST_SUCCESS':
        return { ...state,
            tests: state.tests.map((item) => {
                if(item._id === action.id) {
                    return {...item, ...action.updates};
                } else {
                    return item;
                }}),
            loading: false,
            error: null,
        };

    case 'DELETE_TEST_BEGIN':
        return {...state, loading: true, error: null};
    case 'DELETE_TEST_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'DELETE_TEST_SUCCESS':
        return {
            ...state,
            tests: state.tests.filter((item) => {
                return action.id !== item._id;
            }),
            loading: false,
            error: null
        };
    

    case 'LOAD_TESTS_BEGIN':
        return {...state, loading: true, error: null};
    case 'LOAD_TESTS_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'LOAD_TESTS_SUCCESS':
        return {...state, loading: false, error: null, tests: [...action.allTests] };

        
    case 'ADD_CUSTOM_NOTE_BEGIN':
        return {...state, loading: true, error: null};
    case 'ADD_CUSTOM_NOTE_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'ADD_CUSTOM_NOTE_SUCCESS':
        return {
            ...state,
            tests: state.tests.map((item) => {
                
                if(item._id === action._id) {
                    
                    return {...item, customNotes: action.customNotes};

                } else {
                    return item;
                }}),
            loading: false, error: null};


    case 'CATEGORY_FILTER':
        return {...state, filters: {...state.filters, category: action.category}};
    case 'ALPHABET_FILTER':
        return {...state, filters: {...state.filters, alphabet: action.alphabet}};
    case 'TEXT_FILTER':
        return {...state, filters: {...state.filters, text: action.text}};
    case 'STATIM_FILTER':
        return {...state, filters: {...state.filters, statim: action.statim}};
    case 'ER_FILTER':
        return {...state, filters: {...state.filters, er: action.er}};
    case 'ADDITIONAL_FILTER':
        return {...state, filters: {...state.filters, additional: action.additional}};
    case 'GROUP_FILTER':
        return {...state, filters: {...state.filters, groups: action.group}};
    case 'CLEAR_FILTERS':
        return {...state, filters: {...state.filters, category: 'all', alphabet: '', groups: ''}};

    default:
        return state;
    }
};

export default testReducer;