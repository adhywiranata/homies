import React from 'react';
import { Text, View } from 'react-native';

export interface Props { navigation: any }
export interface State { }

export default class PropertyListScreen extends React.Component<Props, State> {
  static navigationOptions = () => ({
    drawerLabel: 'Properties',
  })
  render() {
    return (
      <View>
        <Text>
          PROPERTIES LIST
        </Text>
      </View>
    );
  }
}
