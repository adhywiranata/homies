import React from 'react';
import { AppRegistry } from 'react-native';

import App from './App';

export interface Props { }
export interface State { }

export default class Homies extends React.Component<Props, State> {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('homies', () => Homies);
