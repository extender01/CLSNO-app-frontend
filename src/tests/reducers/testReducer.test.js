import testReducer from '../../reducers/testReducer';
import {labmets, newLabmet } from '../fixtures/labmets';

const currentState = {
    tests: labmets,
    loading: false,
    error: null,
    filters: {
        alphabet: '',
        category: 'all',
        text: ''
    }
    
   
};



test('should setup default test values', () => {
    const state = testReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        tests: [],
        error: null,
        loading: false,
        filters: {
            alphabet: '',
            category: 'all',
            text: ''
        }
    });
});



test('should ADD TEST BEGIN', () => {
    const state = testReducer(undefined, {
        type: 'ADD_TEST_BEGIN',
        loading: true,
        error: null
    });
    expect(state).toEqual({
        tests: [],
        loading: true,
        error: null,
        filters: {
            alphabet: '',
            category: 'all',
            text: ''
        }
    });
});



test('should add new test to existing array', () => {
    const action = {
        type: 'ADD_TEST_SUCCESS',
        addedTest: {...newLabmet}
    };
    
    
    const state =  testReducer(currentState, action);
    expect(state).toEqual({
        ...state,
        tests: [...currentState.tests, newLabmet],
        loading: false,
        error: null
    });
});

test('should fail when axios request to add test to db fails', () => {
    const action = {
        type: 'ADD_TEST_FAILURE',
        error: 'something went wrong',
        loading: false
    };
    const state = testReducer(currentState, action);
    expect(state).toEqual({
        ...state,
        tests: [...currentState.tests],
        loading: false,
        error: action.error
    });
});













test('should add/edit custom note', () => {
    const action = {
        type: 'ADD_CUSTOM_NOTE_SUCCESS',
        _id: labmets[1]._id,
        customNotes: [{_id: '456abc', department: 's1', customNote: 'ahoj'}]
    };
    const state = testReducer(currentState, action);
   console.log('current', currentState.tests[1].customNotes[0]);
   
    
    expect(state.tests[1].customNotes[0]).toEqual({
        
        
        _id: '456abc',
        department: 's1',
        customNote: 'ahoj'
    });
    
});



test('should set category filter', () => {
    const categoryChosen = 'all';
   
    const action = {
        type: 'CATEGORY_FILTER',
        category: categoryChosen
    };

    const state = testReducer(currentState, action);

    expect(state).toEqual({
        ...currentState,
        filters: {
            ...state.filters,
            category: categoryChosen
        }
    });
});


test('should set alphabet filter', () => {
    const alphabetChosen = 'C';
   
    const action = {
        type: 'ALPHABET_FILTER',
        alphabet: alphabetChosen
    };

    const state = testReducer(currentState, action);

    expect(state).toEqual({
        ...currentState,
        filters: {
            ...state.filters,
            alphabet: alphabetChosen
        }
    });
});



