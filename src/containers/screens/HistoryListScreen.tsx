import React from 'react';
import { Text } from 'react-native';

import Container from '../../components/core/Container';

export interface Props { }
export interface State { }

export default class HistoryListScreen extends React.Component<Props, State> {
  static navigationOptions = {
    drawerLabel: 'History',
  };
  render() {
    return (
      <Container>
        <Text>
          HISTORY LIST
        </Text>
      </Container>
    );
  }
}
