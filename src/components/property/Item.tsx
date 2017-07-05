import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../../constants';
import Button from '../core/Button';
import Card from '../core/Card';

export default ({ navigation }) => {
  const handleItemDetail = () => { navigation.navigate('DetailsStack'); };
  const handleBookItem = () => { alert('Booked!'); };
  const handleSaveItem = () => { alert('Saved'); };
  return (
    <Card>
      <Image
        source={{ uri: 'https://d3p0bla3numw14.cloudfront.net/house/ho23/2383609/hos2383609-disewa-di-pamoyanan_bogor.jpg'}}
        style={{ width: '100%', height: 200, resizeMode: 'cover' }}
      />
      <TouchableOpacity onPress={handleItemDetail}>
        <Text style={{ fontSize: 14, color: colors.mainPurple, fontWeight: 'bold', margin: 5 }}>
          Rumah Second di Pamoyanan Town House
        </Text>
      </TouchableOpacity>
      <Text>House, 100m square</Text>
      <Text style={{ fontSize: 20, color: colors.mainPurple, margin: 5 }}>Rp. 800.000.000</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <Icon name={'eye'} size={14} style={{ marginRight: 5 }} />
            <Text style={{ fontSize: 12 }}>1500</Text>
          </View>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <Icon name={'bookmark'} size={14} style={{ marginRight: 5 }} />
            <Text style={{ fontSize: 12 }}>150</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <Icon name={'bed'} size={14} style={{ marginRight: 5 }} />
            <Text style={{ fontSize: 12 }}>2</Text>
          </View>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <Icon name={'s15'} size={14} style={{ marginRight: 5 }} />
            <Text style={{ fontSize: 12 }}>1</Text>
          </View>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <Icon name={'car'} size={14} style={{ marginRight: 5 }} />
            <Text>2</Text>
          </View>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <Icon name={'lock'} size={14} style={{ marginRight: 5 }} />
            <Icon name={'check'} size={14} style={{ marginRight: 5, color: 'green' }} />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 5 }}>
        <Button primary={true} label={'BOOK'} icon={'heart'} onPress={handleBookItem} />
        <Button primary={false} label={'SAVE'} icon={'bookmark'} onPress={handleSaveItem} />
      </View>
    </Card>
  );
};
