import React from 'react';
import styled from 'styled-components/native';

import { colors } from '../../constants';

interface ButtonPropTypes {
  label: string;
  primary: boolean;
  onPress: any;
}

interface ButtonWrapperPropTypes {
  primary: boolean;
}

const ButtonWrapper = styled.TouchableOpacity`
  flex: 1;
  backgroundColor: ${({ primary }: ButtonWrapperPropTypes) => primary ? colors.mainPurple : 'transparent' };
  padding: 10px;
  margin: 5px;
  borderWidth: 2px;
  borderColor: ${colors.mainPurple};
`;

const ButtonWrapperText = styled.Text`
  fontWeight: bold;
  alignSelf: center;
  color: ${({ primary }: ButtonWrapperPropTypes) => primary ? colors.white : colors.mainPurple };
  borderRadius: 5px;
`;

export default ({ label, primary = false, onPress }: ButtonPropTypes) => (
  <ButtonWrapper activeOpacity={0.7} primary={primary} onPress={onPress}>
    <ButtonWrapperText primary={primary}>{label}</ButtonWrapperText>
  </ButtonWrapper>
);
