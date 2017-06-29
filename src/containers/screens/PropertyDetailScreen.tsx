import React from 'react';
import { FlatList, View, Text } from 'react-native';

import PropertyItem from '../../components/property/Item';

export interface Props { }
export interface State { }

export default class PropertyDetailScreen extends React.Component<Props, State> {
  static navigationOptions = () => ({
    drawerLabel: 'PropertyDetailScreen',
  })
  render() {
    return (
      <View style={{ width: '100%', flexDirection: 'column' }}>
        <PropertyItem />
      </View>
    );
  }
}
