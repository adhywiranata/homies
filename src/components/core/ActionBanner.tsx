import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../constants';

const BannerWrapper = styled.View`
  width: 100%;
  padding: 10px;
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  bottom: 0;
  flexDirection: row;
  justify-content: space-between;
`;

const ActionLabel = styled.Text`
  color: ${colors.white};
`;

const ActionLinkTextActive = styled.Text`
  color: ${colors.orange};
`;

const ActionLinkTextPassive = styled.Text`
  color: ${colors.grey};
`;

export default () => (
  <BannerWrapper>
    <TouchableOpacity>
      <ActionLinkTextActive>UNDO</ActionLinkTextActive>
    </TouchableOpacity>
    <ActionLabel style={{ color: 'white' }}>Property Saved!</ActionLabel>
    <TouchableOpacity>
      <ActionLinkTextPassive>DISMISS</ActionLinkTextPassive>
    </TouchableOpacity>
  </BannerWrapper>
);
