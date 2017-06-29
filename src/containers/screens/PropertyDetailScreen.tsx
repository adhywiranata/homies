import React from 'react';
import { View } from 'react-native';

import PropertyItem from '../../components/property/Item';

export interface Props { navigation: any }
export interface State { }

export default class PropertyDetailScreen extends React.Component<Props, State> {
  static navigationOptions = () => ({
    drawerLabel: 'PropertyDetailScreen',
  })
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ width: '100%', flexDirection: 'column' }}>
        <PropertyItem navigation={navigation} />
      </View>
    );
  }
}
