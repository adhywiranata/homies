import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../constants';

const HeaderWrapper = styled.View`
  width: 100%;
  height: 10%;
  padding-top: 10;
  background-color: ${colors.mainPurple};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const HeaderText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

export default ({ navigation }) => {
  const openDrawer = () => navigation.navigate('DrawerOpen');
  return (
    <HeaderWrapper>
      <TouchableOpacity onPress={openDrawer} style={{ flex: 1 }}>
        <Text style={{ color: colors.white }}>MENU</Text>
      </TouchableOpacity>
      <HeaderText>HOMIES</HeaderText>
      <View style={{ flex: 1 }} />
    </HeaderWrapper>
  );
};
