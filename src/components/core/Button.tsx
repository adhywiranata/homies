import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../../constants';

interface ButtonPropTypes {
  label: string;
  icon: string;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapperText = styled.Text`
  fontWeight: bold;
  alignSelf: center;
  color: ${({ primary }: ButtonWrapperPropTypes) => primary ? colors.white : colors.mainPurple };
  borderRadius: 5px;
`;

const StyledIcon = styled(Icon)`
  margin-right: 10px;
  color: ${({ primary }: ButtonWrapperPropTypes) => primary ? colors.white : colors.mainPurple };
`;

export default ({ label, primary = false, icon = '', onPress }: ButtonPropTypes) => (
  <ButtonWrapper activeOpacity={0.7} primary={primary} onPress={onPress}>
    { icon !== '' && <StyledIcon primary={primary} name={icon} size={20} /> }
    <ButtonWrapperText primary={primary}>{label}</ButtonWrapperText>
  </ButtonWrapper>
);
