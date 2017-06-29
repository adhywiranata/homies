import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import Container from '../../components/core/Container';
import PropertyItem from '../../components/property/Item';

export interface Props { }
export interface State { }

export default class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: 'Home',
  })
  render() {
    return (
      <ScrollView style={{ width: '100%', padding: 10, flexDirection: 'column' }}>
        <Text>
          HOME
        </Text>
        { [1, 2, 3, 4, 5, 6, 7, 8].map(property => (
          <PropertyItem key={property} />
        ))}
      </ScrollView>
    );
  }
}
