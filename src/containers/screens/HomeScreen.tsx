import React from 'react';
import { ScrollView, Text } from 'react-native';

import PropertyItem from '../../components/property/Item';

export interface Props { }
export interface State { }

export default class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = () => ({
    drawerLabel: 'Home',
  })
  render() {
    return (
      <ScrollView style={{ width: '100%', padding: 10, flexDirection: 'column' }}>
        <Text>
          HOME
        </Text>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((property) => (<PropertyItem key={property} />))}
      </ScrollView>
    );
  }
}
