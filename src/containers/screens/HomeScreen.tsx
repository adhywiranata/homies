import React from 'react';
import { FlatList, View, Text } from 'react-native';

import PropertyItem from '../../components/property/Item';

export interface Props { }
export interface State { }

export default class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = () => ({
    drawerLabel: 'Home',
  })
  render() {
    return (
      <View style={{ width: '100%', flexDirection: 'column' }}>
        <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0, 0.2)' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
            HOME
          </Text>
        </View>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <PropertyItem />}
          style={{ padding: 10, height: '84.5%' }}
        />
      </View>
    );
  }
}
