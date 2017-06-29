import React from 'react';
import { Text, View } from 'react-native';

export interface Props { navigation: any; }

export default class PropertyListScreen extends React.Component<Props, {}> {
  static navigationOptions = () => ({
    drawerLabel: 'Profile',
  })
  render() {
    return (
      <View>
        <Text>
          MY PROFILE :)
        </Text>
      </View>
    );
  }
}
