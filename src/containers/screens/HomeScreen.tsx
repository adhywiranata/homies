import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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

export default class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          HOMIES
        </Text>
        <TouchableOpacity onPress={() => navigate('Properties')}>
          <Text>
            Go to List
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
