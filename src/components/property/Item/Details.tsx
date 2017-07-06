import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
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
        style={{ width: '100%', height: 300, resizeMode: 'cover' }}
      />
      <Title style={{ fontSize: 18, marginTop: 20 }}>
        Rumah Keren Pamoyanan Town House
      </Title>
      <Text>House, 100m square</Text>
      <Price>Rp. 800.000.000</Price>
      <InfoWrapper style={{ marginTop: 10 }}>
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
            <Icon name={'check'} size={14} style={{ marginRight: 5, color: 'teal' }} />
          </View>
        </ItemInfo>
      </InfoWrapper>
      <View style={{ width: '100%', flexDirection: 'column', padding: 20, paddingTop: 10 }}>
        <View style={{ width: '100%', padding: 10, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0, 0.1)' }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
            Description
          </Text>
          <Text style={{ fontSize: 12, marginTop: 5 }}>
            lorem ipsum dolor sit amet this is a super cool house in Pamoyanan Town House, Bogor.
            This house has 2 bedrooms, 1 batchroom, and super spacious garage that can be filled with up to two cars!
            Of course we have superb security in the cluster.
          </Text>
          <Text style={{ fontSize: 12, marginTop: 5 }}>
            lorem ipsum dolor sit amet this is a super cool house in Pamoyanan Town House, Bogor.
            This house has 2 bedrooms, 1 batchroom, and super spacious garage that can be filled with up to two cars!
            Of course we have superb security in the cluster.
          </Text>
          <Text style={{ fontSize: 12, marginTop: 5 }}>
            lorem ipsum dolor sit amet this is a super cool house in Pamoyanan Town House, Bogor.
            This house has 2 bedrooms, 1 batchroom, and super spacious garage that can be filled with up to two cars!
            Of course we have superb security in the cluster.
          </Text>
        </View>
        <View style={{ width: '100%', padding: 10, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0, 0.1)' }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
            Agent
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
            <Image
              source={{ uri: 'https://blogs-images.forbes.com/bonniemarcus/files/2017/03/Bonnie-Marcus_avatar_1489153032-400x400.jpg' }}
              style={{ width: 40, height: 40, borderRadius: 20, resizeMode: 'cover', marginRight: 10 }}
            />
            <View style={{ width: '60%' }}>
            <Text style={{ fontSize: 12, marginTop: 0, fontWeight: 'bold' }}>
              Sarah Whey
            </Text>
            <Text style={{ fontSize: 12, marginTop: 2 }}>
              WhiteHouse Housing Agency Agent
            </Text>
            </View>
            <TouchableOpacity>
              <Icon name={'phone'} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={'envelope'} size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  );
};
