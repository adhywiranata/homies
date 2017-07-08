import React from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from '../../core/Button';
import Card from '../../core/Card';

import {
  TitleLink,
  Price,
  InfoWrapper,
  ItemInfo,
  ActionButtonWrapper,
  InfoLabel,
} from './core';

export default ({ navigation, property }: { navigation: any, property: any }) => {
  const handleItemDetail = () => { navigation.navigate('DetailsStack'); };
  const handleBookItem = () => { alert('Booked!'); };
  const handleSaveItem = () => { alert('Saved'); };
  return (
    <Card>
      <Image
        source={{ uri: property.images[0].url}}
        style={{ width: '100%', height: 200, resizeMode: 'cover' }}
      />
      <TitleLink
        label={property.name}
        handleItemDetail={handleItemDetail}
      />
      <Text>{property.category}, {property.width}m square</Text>
      <Price>{property.price}</Price>
      <InfoWrapper>
        <ItemInfo>
          <InfoLabel icon={'eye'} label={property.impressions.views} />
          <InfoLabel icon={'bookmark'} label={property.impressions.saves} />
        </ItemInfo>
        <ItemInfo>
          <InfoLabel icon={'bed'} label={property.facilities.bedroom} />
          <InfoLabel icon={'s15'} label={property.facilities.bathroom} />
          <InfoLabel icon={'car'} label={property.facilities.carSlot} />
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <Icon name={'lock'} size={14} style={{ marginRight: 5 }} />
            { property.facilities.security ? (
              <Icon name={'check'} size={14} style={{ marginRight: 5, color: 'green' }} />
            ) : (                
              <Icon name={'close'} size={14} style={{ marginRight: 5, color: 'red' }} />    
            )}
          </View>
        </ItemInfo>
      </InfoWrapper>
      <ActionButtonWrapper>
        <Button primary={true} label={'BOOK'} icon={'heart'} onPress={handleBookItem} />
        <Button primary={false} label={'SAVE'} icon={'bookmark'} onPress={handleSaveItem} />
      </ActionButtonWrapper>
    </Card>
  );
};
