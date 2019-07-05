// __tests__/ApplicationRootScreen-test.js
import React from 'react';
import ApplicationRootScreen from '../components/ApplicationRootScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ApplicationRootScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});