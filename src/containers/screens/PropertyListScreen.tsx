import React from 'react';
import { View, Text } from 'react-native';

export interface Props { }
export interface State { }

export default class PropertyListScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation, screenProps }) => ({
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
