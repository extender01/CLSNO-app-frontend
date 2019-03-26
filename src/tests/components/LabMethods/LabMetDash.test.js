import React from 'react';
import {shallow} from 'enzyme';
import LabMetDash from '../../../components/LabMethods/LabMetDash';


test('should render LabMetDash correctly', () => {
    const wrapper = shallow(<LabMetDash />);
    expect(wrapper).toMatchSnapshot();
});

