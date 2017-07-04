import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { HeaderWrapper, HeaderText } from './HeaderCore';

export default ({ navigation }: { navigation: any }) => {
  const openDrawer = () => navigation.navigate('DrawerOpen');
  return (
    <HeaderWrapper>
      <TouchableOpacity onPress={openDrawer} style={{ flex: 1 }}>
        <Icon name={'bars'} size={20} color={'#FFFFFF'} style={{ marginLeft: 10 }} />
      </TouchableOpacity>
      <HeaderText>HOME</HeaderText>
      <TouchableOpacity onPress={openDrawer} style={{ flex: 1 }}>
        <Icon name={'search'} size={20} color={'#FFFFFF'} style={{ marginRight: 10, alignSelf: 'flex-end' }} />
      </TouchableOpacity>
    </HeaderWrapper>
  );
};
