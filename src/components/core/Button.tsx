import React from 'react';
import styled from 'styled-components/native';

import { colors } from '../../constants';

const Button = styled.TouchableOpacity`
  flex: 1;
  backgroundColor: ${(props) => props.primary ? colors.mainPurple : 'transparent' };
  padding: 10px;
  margin: 5px;
  borderWidth: 2px;
  borderColor: ${colors.mainPurple};
`;

const ButtonText = styled.Text`
  fontWeight: bold;
  alignSelf: center;
  color: ${(props) => props.primary ? colors.white : colors.mainPurple };
  borderRadius: 5px;
`;

interface PropTypes {
  label: string;
  primary?: boolean;
  onPress: any;
}

export default ({ label, primary = false, onPress }: PropTypes) => (
  <Button activeOpacity={0.7} onPress={onPress} primary={primary}>
    <ButtonText primary={primary}>{label}</ButtonText>
  </Button>
);
