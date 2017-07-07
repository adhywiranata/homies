import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-icon-checkbox';

import { colors } from '../../constants';
import { HeaderText, HeaderWrapper } from '../core/HeaderCore';

interface Props {
  displayRumahCategory: boolean;
  toggleModalVisibility: any;
  toggleRumahCategoryFilter: any;
}

export default ({ displayRumahCategory, toggleModalVisibility, toggleRumahCategoryFilter }: Props) => (
  <View style={{ flex: 1 }}>
    <HeaderWrapper style={{ elevation: 1 }}>
      <View style={{ flex: 1, padding: 10 }} />
      <HeaderText>FILTER</HeaderText>
      <TouchableOpacity onPress={toggleModalVisibility} style={{ flex: 1, padding: 10 }}>
        <Icon name={'close'} size={30} style={{ color: 'white', alignSelf: 'flex-end' }} />
      </TouchableOpacity>
    </HeaderWrapper>
    <View style={{ flexDirection: 'column', padding: 20 }}>
      <Text style={{ fontWeight: 'bold' }}>KATEGORI PROPERTI</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <CheckBox
            label="Rumah"
            size={20}
            iconStyle={{ color: colors.mainPurple }}
            labelStyle={{ color: 'rgba(0,0,0,0.5)', fontSize: 14 }}
            checked={displayRumahCategory}
            onPress={toggleRumahCategoryFilter}
        />
        <CheckBox
            label="Apartemen"
            size={20}
            iconStyle={{ color: colors.mainPurple }}
            labelStyle={{ color: 'rgba(0,0,0,0.5)', fontSize: 14 }}
            checked={displayRumahCategory}
            onPress={toggleRumahCategoryFilter}
        />
        <CheckBox
            label="Ruko"
            size={20}
            iconStyle={{ color: colors.mainPurple }}
            labelStyle={{ color: 'rgba(0,0,0,0.5)', fontSize: 14 }}
            checked={displayRumahCategory}
            onPress={toggleRumahCategoryFilter}
        />
      </View>
      <Text style={{ fontWeight: 'bold' }}>KISARAN HARGA</Text>
      <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
        <CheckBox
            label="< 500,000,000"
            size={20}
            iconStyle={{ color: colors.mainPurple }}
            labelStyle={{ color: 'rgba(0,0,0,0.5)', fontSize: 14 }}
            checked={displayRumahCategory}
            onPress={toggleRumahCategoryFilter}
        />
        <CheckBox
            label="500,000,000 - 1,000,000,000"
            size={20}
            iconStyle={{ color: colors.mainPurple }}
            labelStyle={{ color: 'rgba(0,0,0,0.5)', fontSize: 14 }}
            checked={displayRumahCategory}
            onPress={toggleRumahCategoryFilter}
        />
        <CheckBox
            label="1,000,000,000 - 2,000,000,000"
            size={20}
            iconStyle={{ color: colors.mainPurple }}
            labelStyle={{ color: 'rgba(0,0,0,0.5)', fontSize: 14 }}
            checked={displayRumahCategory}
            onPress={toggleRumahCategoryFilter}
        />
        <CheckBox
            label="2,000,000,000 - 3,000,000,000"
            size={20}
            iconStyle={{ color: colors.mainPurple }}
            labelStyle={{ color: 'rgba(0,0,0,0.5)', fontSize: 14 }}
            checked={displayRumahCategory}
            onPress={toggleRumahCategoryFilter}
        />
        <CheckBox
            label="> 3,000,000,000"
            size={20}
            iconStyle={{ color: colors.mainPurple }}
            labelStyle={{ color: 'rgba(0,0,0,0.5)', fontSize: 14 }}
            checked={displayRumahCategory}
            onPress={toggleRumahCategoryFilter}
        />
      </View>
    </View>
    <TouchableOpacity
      onPress={toggleModalVisibility}
      activeOpacity={0.8}
      style={{
      padding: 10,
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: colors.mainPurple,
    }}>
      <Text style={{ color: colors.white, fontWeight: 'bold' }}>SIMPAN</Text>
    </TouchableOpacity>
  </View>
);
