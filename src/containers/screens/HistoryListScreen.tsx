import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export interface Props { }
export interface State { }

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  logo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});

export default class HistoryListScreen extends React.Component<Props, State> {
  static navigationOptions = {
    drawerLabel: 'History',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          HISTORY LIST
        </Text>
      </View>
    );
  }
}
