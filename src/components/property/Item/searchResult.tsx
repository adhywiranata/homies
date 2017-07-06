import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../../../constants';
import Button from '../../core/Button';
import Card from '../../core/Card';

import {
  ActionButtonWrapper,
  InfoLabel,
  InfoWrapper,
  ItemInfo,
  Price,
  TitleLink,
} from './core';

export default ({ navigation }) => {
  const handleItemDetail = () => { navigation.navigate('DetailsStack'); };
  return (
    <Card style={{ flexDirection: 'row', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.1)', paddingBottom: 10 }}>
      <Icon name={'home'} size={30} style={{ marginRight: 10, color: colors.mainPurple }} />
      <View style={{ flex: 1, padding: 0 }}>
        <TitleLink
          label={'Rumah Keren Pamoyanan Town House'}
          handleItemDetail={handleItemDetail}
          style={{ marginTop: -5 }}
        />
        <Text style={{ paddingLeft: 5 }}>House, 100m square</Text>
      </View>
      <TouchableOpacity style={{ width: 20 }}>
        <Icon name={'external-link'} size={20} style={{ color: 'rgba(0,0,0,0.5)' }} />
      </TouchableOpacity>
    </Card>
  );
};