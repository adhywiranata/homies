import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

import { colors } from '../../../constants';

export const Title = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${colors.mainPurple};
  margin: 5px;
`;

export const Price = styled.Text`
  font-size: 20;
  color: ${colors.mainPurple};
  margin: 5px;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const ActionButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 5px;
`;

export const InfoLabel = ({ icon, label }: { icon: string; label: number }) => (
  <View style={{ flexDirection: 'row', margin: 5 }}>
    <Icon name={icon} size={14} style={{ marginRight: 5 }} />
    <Text style={{ fontSize: 12 }}>{label}</Text>
  </View>
);

export const TitleLink = ({ label, handleItemDetail }: { label: string, handleItemDetail: any }) => (
  <TouchableOpacity onPress={handleItemDetail}>
    <Title>{label}</Title>
  </TouchableOpacity>
);
