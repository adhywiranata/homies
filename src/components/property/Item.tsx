import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import Card from '../core/Card';
import Button from '../core/Button';

export default () => (
  <Card>
    <Image
      source={{ uri: 'https://d3p0bla3numw14.cloudfront.net/house/ho23/2383609/hos2383609-disewa-di-pamoyanan_bogor.jpg'}}
      style={{ width: '100%', height: 250, resizeMode: 'cover' }}
    />
    <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 5 }}>Pamoyanan Town House</Text>
    <Text style={{ fontSize: 20, color: '#9B59B6', margin: 5 }}>Rp. 800.000.000</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 5 }}>
      <Button primary label={'Book'} onPress={() => {}} />
      <Button label={'Save'} onPress={() => {}} />
    </View>
  </Card>
);
