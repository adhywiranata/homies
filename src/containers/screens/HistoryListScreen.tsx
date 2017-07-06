import React from 'react';
import { FlatList, Text, View } from 'react-native';

import PropertyItem from '../../components/property/Item/minimal';

export interface Props { navigation: any; }
// export interface State { }

const historyData = [
  {key: 'a'},
  {key: 'b'},
  {key: 'c'},
  {key: 'd'},
  {key: 'e'},
  {key: 'f'},
  {key: 'g'},
  {key: 'h'},
  {key: 'i'},
  {key: 'j'},
  {key: 'k'},
  {key: 'l'},
];

export default class HistoryListScreen extends React.Component<Props, {}> {
  static navigationOptions = {
    drawerLabel: 'History',
  };
  render() {
    const { navigation } = this.props;
    const renderItem = ({item}) => <PropertyItem navigation={navigation} {...item} />;
    return (
      <View style={{ width: '100%', flexDirection: 'column' }}>
        <FlatList
          data={historyData}
          renderItem={renderItem}
          style={{ padding: 10, height: '91.5%' }}
        />
      </View>
    );
  }
}
