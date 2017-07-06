import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { HeaderText, HeaderWrapper } from './HeaderCore';

export default ({ navigation, toggleSearchModalVisibility }: { navigation: any, toggleSearchModalVisibility: any }) => {
  const openDrawer = () => navigation.navigate('DrawerOpen');
  const goBack = () => navigation.goBack();
  return (
    <HeaderWrapper>
      { navigation.state.routeName !== "DetailsStack" ? (
        <TouchableOpacity onPress={openDrawer} style={{ flex: 1 }}>
          <Icon name={'bars'} size={20} color={'#FFFFFF'} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={goBack} style={{ flex: 1 }}>
          <Icon name={'chevron-left'} size={20} color={'#FFFFFF'} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      )}
      <HeaderText>HOME</HeaderText>
      { navigation.state.routeName === "HomeStack" ? (
        <TouchableOpacity onPress={toggleSearchModalVisibility} style={{ flex: 1 }}>
          <Icon name={'search'} size={20} color={'#FFFFFF'} style={{ marginRight: 10, alignSelf: 'flex-end' }} />
        </TouchableOpacity>
      ): <View style={{ flex: 1}} />}
    </HeaderWrapper>
  );
};
