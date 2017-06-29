import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../constants';

const ContainerWrapper = styled.View`
  background-color: ${colors.darkerWhite};
  flex: 1;
  align-items: center;
`;

export default ContainerWrapper;
