import React from 'react';
import { View, Text } from 'react-native';

export interface Props { }
export interface State { }

export default class HistoryListScreen extends React.Component<Props, State> {
  static navigationOptions = {
    drawerLabel: 'History',
  };
  render() {
    return (
      <View>
        <Text>
          HISTORY LIST
        </Text>
      </View>
    );
  }
}
