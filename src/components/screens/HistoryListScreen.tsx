import React from 'react';
import { FlatList, View } from 'react-native';

import PropertyItem from '../property/Item/minimal';

export interface Props {
  navigation: any;
  historyData: any;
}
// export interface State { }

export default ({ historyData, navigation }: Props) => {
  const renderItem = ({item}) => <PropertyItem navigation={navigation} {...item} />;
  return (
    <View style={{ width: '100%', flexDirection: 'column' }}>
      <FlatList
        data={historyData}
        renderItem={renderItem}
        style={{ width: '100%', padding: 10, height: '91.5%' }}
      />
    </View>
  );
};
