import React from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { HeaderWrapper } from '../core/HeaderCore';
import SearchResultItem from './Item/searchResult';

export default ({ toggleSearchModalVisibility, navigation }: { toggleSearchModalVisibility: any, navigation: any }) => (
  <View style={{ flex: 1 }}>
    <HeaderWrapper style={{ elevation: 1, justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={toggleSearchModalVisibility} style={{ width: 30, padding: 10, paddingLeft: 0 }}>
        <Icon name={'chevron-left'} size={20} style={{ color: 'white', alignSelf: 'flex-end' }} />
      </TouchableOpacity>
      <Icon name={'search'} size={15} style={{ color: '#DDD' }} />
      <TextInput
        autoFocus={true}
        placeholder={'Search for your dream homes...'}
        selectionColor={'#DDDDDD'}
        placeholderTextColor={'#F5F5F5'}
        underlineColorAndroid={'transparent'}
        returnKeyType={'search'}
        style={{ width: '70%', color: 'white', padding: 10, fontSize: 16 }}
      />
      <TouchableOpacity onPress={toggleSearchModalVisibility} style={{ width: 30, padding: 10, paddingLeft: 0 }}>
        <Icon name={'map-marker'} size={20} style={{ color: 'white', alignSelf: 'flex-end' }} />
      </TouchableOpacity>
    </HeaderWrapper>
    <View>
      <Text style={{ fontWeight: 'bold', padding: 5 }}>Search Results</Text>
    </View>
    <FlatList
      data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
      renderItem={({item}) => <SearchResultItem navigation={navigation} {...item} toggleSearchModalVisibility={toggleSearchModalVisibility} />}
      style={{ padding: 10, height: '91.5%' }}
    />
  </View>
);
