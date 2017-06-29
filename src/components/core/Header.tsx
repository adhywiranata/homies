import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const HeaderWrapper = styled.View`
  width: 100%;
  height: 10%;
  padding-top: 10;
  background-color: teal;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-weight: bold;
`;

export default () => (
  <HeaderWrapper>
    <HeaderText>HOMIES</HeaderText>
  </HeaderWrapper>
)
