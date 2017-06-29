import React from 'react';
import { Text } from 'react-native';

import Container from '../../components/core/Container';

export interface Props { }
export interface State { }

export default class PropertyListScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: 'Properties',
  })
  render() {
    return (
      <Container>
        <Text>
          PROPERTIES LIST
        </Text>
      </Container>
    );
  }
}
