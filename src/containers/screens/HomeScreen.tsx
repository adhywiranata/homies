import React from 'react';
import { FlatList, View } from 'react-native';

import FilterBar from '../../components/property/FilterBar';
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
        <FilterBar />
        <FlatList
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
          renderItem={renderItem}
          style={{ padding: 10, height: '84.5%' }}
        />
      </View>
    );
  }
}
