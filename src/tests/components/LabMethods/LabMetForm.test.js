import React from 'react';
import {shallow} from 'enzyme';
import LabMetForm   from '../../../components/LabMethods/LabMetForm';
import {labmets} from '../../fixtures/labmets';

test('should render LabMetForm for adding method with empty inputs', () => {
    const wrapper = shallow(<LabMetForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render LabMetForm for editing method with filled inputs', () => {
    const particularTest = labmets[1];
    const wrapper = shallow(<LabMetForm labMetToEdit={particularTest} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error when name or where is missing on form submission', () => {
    const wrapper = shallow(<LabMetForm />);
    expect(wrapper).toMatchSnapshot();

    //finds first form tag - at(0) - on rendered LabMetForm and simulates submit function
    //2nd argument is object which is normally used as argument, here we fake it to avoid..
    //..error saying things are undefined, here preventDefault as empty function
    wrapper.find('form').at(0).simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set name state on input change', () => {
    const newValue = 'nova hodnota';
    const wrapper = shallow(<LabMetForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            name: 'name',
            value: newValue
        }
    });
    expect(wrapper.state('name')).toBe(newValue);

    
});

// const inputCheck = (inputNumber, inputName) => {
//     const newValue = 'nova hodnota';
//     const wrapper = shallow(<LabMetForm />);
//     wrapper.find('input').at(inputNumber).simulate('change', {
//         target: {
//             name: inputName,
//             value: newValue
//         }
//     });
//     expect(wrapper.state(inputName)).toBe(newValue);
// };

const inputCheck = (inputNumber, inputName) => {
    test(`should check input ${inputName}`, () => {

        const newValue = 'nova hodnota';
        const wrapper = shallow(<LabMetForm />);
        wrapper.find('input').at(inputNumber).simulate('change', {
            target: {
                name: inputName,
                value: newValue
            }
        });
        
        
        expect(wrapper.state(inputName)).toBe(newValue);
        
    });
   
};

inputCheck(0, 'name');

