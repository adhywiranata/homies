import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

import { colors } from '../../constants';

const HeaderWrapper = styled.View`
  width: 100%;
  height: 10%;
  padding-top: 0;
  background-color: ${colors.mainPurple};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const HeaderText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 20px;
  flex: 1;
  text-align: center;
`;

export default ({ navigation }: { navigation: any }) => {
  const openDrawer = () => navigation.navigate('DrawerOpen');
  return (
    <HeaderWrapper>
      <TouchableOpacity onPress={openDrawer} style={{ flex: 1 }}>
        <Icon name={'bars'} size={20} color={'#FFFFFF'} style={{ marginLeft: 10 }} />
      </TouchableOpacity>
      <HeaderText>HOME</HeaderText>
      <TouchableOpacity onPress={openDrawer} style={{ flex: 1 }}>
        <Icon name={'search'} size={20} color={'#FFFFFF'} style={{ marginRight: 10, alignSelf: 'flex-end' }} />
      </TouchableOpacity>
    </HeaderWrapper>
  );
};
