import styled from 'styled-components/native';

import { colors } from '../../constants';

export const HeaderWrapper = styled.View`
  width: 100%;
  height: 50px;
  padding-top: 0;
  background-color: ${colors.mainPurple};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 20px;
  flex: 1;
  text-align: center;
`;
