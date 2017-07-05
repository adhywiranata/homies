import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

import { colors } from '../../constants';
import Button from '../core/Button';
import Card from '../core/Card';

const Title = styled.Text`
  font-size: 14;
  color: ${colors.mainPurple};
  font-weight: bold;
  margin: 5px;
`;

const Price = styled.Text`
  font-size: 20;
  color: ${colors.mainPurple};
  margin: 5px;
`;

const InfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ItemInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

const ActionButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 5px;
`;

const InfoLabel = ({ icon, label }: { icon: string; label: number }) => (
  <View style={{ flexDirection: 'row', margin: 5 }}>
    <Icon name={icon} size={14} style={{ marginRight: 5 }} />
    <Text style={{ fontSize: 12 }}>{label}</Text>
  </View>
);

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
        <Title>
          Rumah Second di Pamoyanan Town House
        </Title>
      </TouchableOpacity>
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
      <ActionButtonWrapper>
        <Button primary={true} label={'BOOK'} icon={'heart'} onPress={handleBookItem} />
        <Button primary={false} label={'SAVE'} icon={'bookmark'} onPress={handleSaveItem} />
      </ActionButtonWrapper>
    </Card>
  );
};
