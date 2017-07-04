import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { HeaderWrapper } from '../core/HeaderCore';

export default ({ toggleSearchModalVisibility }: { toggleSearchModalVisibility: any }) => (
  <View style={{ flex: 1 }}>
    <HeaderWrapper style={{ elevation: 1, justifyContent: 'flex-start' }}>
      <TouchableOpacity onPress={toggleSearchModalVisibility} style={{ width: 30, padding: 10, paddingLeft: 0 }}>
        <Icon name={'chevron-left'} size={20} style={{ color: 'white', alignSelf: 'flex-end' }} />
      </TouchableOpacity>
      <TextInput
        autoFocus={true}
        placeholder={'Search for your dream homes'}
        placeholderTextColor={'#F5F5F5'}
        underlineColorAndroid={'transparent'}
        returnKeyType={'search'}
        style={{ width: '88%', color: 'white', padding: 10 }} />
    </HeaderWrapper>
    <View>
      <Text>Search Results</Text>
    </View>
  </View>
);
