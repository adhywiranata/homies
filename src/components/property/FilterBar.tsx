import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

import { colors } from '../../constants';

const BarWrapper = styled.View`
  background-color: #FFFFFF;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.shade};
  flex-direction: row;
`;

const BarButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  flex-direction: row;
  border-right-width: 0.5px;
  border-right-color: ${colors.shade};
  border-left-width: 0.5px;
  border-left-color: ${colors.shade};
`;

const BarLabel = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 12;
`

export default () => (
  <BarWrapper>
    <BarButton activeOpacity={0.7}>
      <BarLabel>SORT</BarLabel>
      <Icon name="sort-amount-asc" size={15} color="#666666" />
    </BarButton>
    <BarButton activeOpacity={0.7}>
      <BarLabel>FILTER</BarLabel>
      <Icon name="filter" size={15} color="#666666" />
    </BarButton>
    <BarButton activeOpacity={0.7}>
      <BarLabel>TYPES</BarLabel>
      <Icon name="sitemap" size={15} color="#666666" />
    </BarButton>
    <BarButton activeOpacity={0.7}>
      <BarLabel>NEARBY</BarLabel>
      <Icon name="map-marker" size={15} color="#666666" />
    </BarButton>
  </BarWrapper>
);
