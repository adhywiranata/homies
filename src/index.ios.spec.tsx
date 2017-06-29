import { shallow } from 'enzyme';
import React from 'react';
import 'react-native';

import Index from './index.android';

it('renders correctly', () => {
  const wrapper = shallow(<Index />);
  expect(wrapper).toBeDefined();
});

// import React from 'react';
// import 'react-native';
// import renderer from 'react-test-renderer';
//
// import Index from './index.android';
//
// it('renders correctly', () => {
//   const tree = renderer.create(
//     <Index />,
//   );
//   expect(tree).toBeDefined();
// });
