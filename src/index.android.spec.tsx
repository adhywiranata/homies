import { shallow } from 'enzyme';
import React from 'react';
import 'react-native';

import Index from './index.android';

it('renders correctly', () => {
  const wrapper = shallow(<Index />);
  expect(wrapper).toBeDefined();
});
