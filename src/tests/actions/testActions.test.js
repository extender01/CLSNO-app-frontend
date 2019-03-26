import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {addTestBegin, addTestFailure, addTestSuccess, startAddTest} from '../../actions/testActions';
import {labmets} from '../fixtures/labmets';


const createMockStore = configureMockStore([thunk]);

test('should generate Action object for ADD_TEST_BEGIN', () => {
    const action = addTestBegin();
    expect(action).toEqual({type: 'ADD_TEST_BEGIN'});
});

test('should generate Action object for ADD_TEST_FAILURE', () => {
    const error = 'selhalo to';
    const action = addTestFailure(error);
    expect(action).toEqual({
        type: 'ADD_TEST_FAILURE',
        error
    });
});

test('should generate Action object for ADD_TEST_SUCCESS', () => {
    const action = addTestSuccess(labmets[0]);
    expect(action).toEqual({
        type: 'ADD_TEST_SUCCESS',
        addedTest: labmets[0]
    });
});

test('bla', (done) => {
    const store = createMockStore({});

    store.dispatch(startAddTest(labmets[1])).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_TEST_BEGIN'
        });
        expect(actions[1]).toEqual({
            type: 'ADD_TEST_FAILURE',
            error: {'Error': 'Network Error'}
        });
        done();
    });


});