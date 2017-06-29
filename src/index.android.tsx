import React from 'react';
import { AppRegistry } from 'react-native';

import App from './App';

export default class Homies extends React.Component<{}, {}> {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('homies', () => Homies);
