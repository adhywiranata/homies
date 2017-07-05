import React from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Button from '../../core/Button';
import Card from '../../core/Card';

import {
  InfoLabel,
  InfoWrapper,
  ItemInfo,
  Price,
  Title,
} from './core';

export default () => {
  return (
    <Card>
      <Image
        source={{ uri: 'https://d3p0bla3numw14.cloudfront.net/house/ho23/2383609/hos2383609-disewa-di-pamoyanan_bogor.jpg'}}
        style={{ width: '100%', height: 200, resizeMode: 'cover' }}
      />
      <Title>Rumah Keren Pamoyanan Town House</Title>
      <Text>House, 100m square</Text>
      <Price>Rp. 800.000.000</Price>
      <InfoWrapper>
        <ItemInfo>
          <InfoLabel icon={'eye'} label={1527} />
          <InfoLabel icon={'bookmark'} label={150} />
        </ItemInfo>
        <ItemInfo>
          <InfoLabel icon={'bed'} label={2} />
          <InfoLabel icon={'s15'} label={1} />
          <InfoLabel icon={'car'} label={2} />
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <Icon name={'lock'} size={14} style={{ marginRight: 5 }} />
            <Icon name={'check'} size={14} style={{ marginRight: 5, color: 'green' }} />
          </View>
        </ItemInfo>
      </InfoWrapper>
    </Card>
  );
};
