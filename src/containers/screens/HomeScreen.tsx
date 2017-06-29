import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Container from '../../components/core/Container';

export interface Props { }
export interface State { }

const styles: any = StyleSheet.create({
  logo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});

export default class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: 'Home',
  })
  render() {
    return (
      <Container>
        <Text style={styles.logo}>
          HOME
        </Text>
      </Container>
    );
  }
}
