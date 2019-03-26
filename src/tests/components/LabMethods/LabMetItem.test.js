import React from 'react';
import {shallow} from 'enzyme';
import LabMetItem from '../../../components/LabMethods/LabMetItem';
import {labmets} from '../../fixtures/labmets';


test('should render Lab Met Item correctly', () => {
    const wrapper = shallow(<LabMetItem {...labmets[1]} />);
    expect(wrapper).toMatchSnapshot();
});