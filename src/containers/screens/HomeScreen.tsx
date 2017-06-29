import React from 'react';
import { FlatList, Text, View } from 'react-native';

import PropertyItem from '../../components/property/Item';

export interface Props { navigation: any; }
// export interface State { }

export default class HomeScreen extends React.Component<Props, {}> {
  static navigationOptions = () => ({
    drawerLabel: 'Home',
  })
  render() {
    const { navigation } = this.props;
    const renderItem = ({item}) => <PropertyItem navigation={navigation} {...item} />;
    return (
      <View style={{ width: '100%', flexDirection: 'column' }}>
        <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0, 0.2)' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
            HOME
          </Text>
        </View>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
          renderItem={renderItem}
          style={{ padding: 10, height: '84.5%' }}
        />
      </View>
    );
  }
}
