import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../constants';

export default styled.View`
  background-color: ${colors.white};
  marginBottom: 10px;
  padding: 10px;
  border: 1px solid rgba(0,0,0, 0.1);
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
