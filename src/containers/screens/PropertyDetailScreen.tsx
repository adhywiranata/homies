import React from 'react';
import { ScrollView } from 'react-native';

import PropertyItemDetails from '../../components/property/Item/Details';

export interface Props {}
// export interface State { }

export default class PropertyDetailScreen extends React.Component<Props, {}> {
  static navigationOptions = () => ({
    drawerLabel: 'PropertyDetailScreen',
  })
  render() {
    return (
      <ScrollView style={{ width: '100%', flexDirection: 'column' }}>
        <PropertyItemDetails />
      </ScrollView>
    );
  }
}
