import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { HeaderWrapper, HeaderText } from '../core/HeaderCore';

export default ({ toggleModalVisibility }: { toggleModalVisibility: any }) => (
  <View style={{ flex: 1 }}>
    <HeaderWrapper style={{ elevation: 1 }}>
      <View style={{ flex: 1, padding: 10 }} />
      <HeaderText>FILTER</HeaderText>
      <TouchableOpacity onPress={toggleModalVisibility} style={{ flex: 1, padding: 10 }}>
        <Icon name="close" size={30} style={{ color: 'white', alignSelf: 'flex-end' }} />
      </TouchableOpacity>
    </HeaderWrapper>
    <View>
      <Text>Filter properties based on below queries</Text>
    </View>
  </View>
);
