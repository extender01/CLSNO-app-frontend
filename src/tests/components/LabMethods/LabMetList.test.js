import React from 'react';
import {shallow} from 'enzyme';
import {LabMetList} from '../../../components/LabMethods/LabMetList';
import {labmets} from '../../fixtures/labmets';

test('should render LabMetList with lab methods', () => {
    const wrapper = shallow(<LabMetList labTests={labmets}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render LabMetList with warning, that there are no methods', () => {
    const wrapper = shallow(<LabMetList labTests={[]} />);
    expect(wrapper).toMatchSnapshot();
});