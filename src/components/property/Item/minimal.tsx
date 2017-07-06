import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from '../../core/Card';

import {
  Price,
  TitleLink,
} from './core';

export default ({ navigation }) => {
  const handleItemDetail = () => { navigation.navigate('DetailsStack'); };
  return (
    <Card style={{ flexDirection: 'row' }}>
      <View style={{ flex: 0.5 }}>
        <Image
          source={{ uri: 'https://d3p0bla3numw14.cloudfront.net/house/ho23/2383609/hos2383609-disewa-di-pamoyanan_bogor.jpg'}}
          style={{ width: '100%', height: 100, resizeMode: 'cover' }}
        />
      </View>
      <View style={{ flex: 1, padding: 5 }}>
        <TitleLink
          label={'Rumah Keren Pamoyanan Town House'}
          handleItemDetail={handleItemDetail}
        />
        <Text style={{ paddingLeft: 5 }}>House, 100m square</Text>
        <Price>Rp. 800.000.000</Price>
      </View>
    </Card>
  );
};
