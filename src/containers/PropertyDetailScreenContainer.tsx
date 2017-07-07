import React from 'react';

import PropertyDetailScreen from '../components/screens/PropertyDetailScreen';

export interface Props {}
// export interface State { }

export default class extends React.Component<Props, {}> {
  static navigationOptions = () => ({
    drawerLabel: 'PropertyDetailScreen',
  })
  render() {
    return (
      <PropertyDetailScreen />
    );
  }
}
