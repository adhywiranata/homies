import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import React from 'react';

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

export default class Homies extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          HOMIES
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('homies', () => Homies);
