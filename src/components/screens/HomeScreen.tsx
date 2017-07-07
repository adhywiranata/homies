import React from 'react';
import { FlatList, Modal, View } from 'react-native';

import FilterBar from '../property/FilterBar';
import FilterModal from '../property/FilterModal';
import PropertyItem from '../property/Item';
import SearchModal from '../property/SearchModal';

interface Props {
  navigation: any;
  modalVisible: boolean;
  searchModalVisible: boolean;
  toggleModalVisibility: any;
  toggleSearchModalVisibility: any;
  houseData: any;
}

export default ({
  navigation,
  modalVisible,
  searchModalVisible,
  toggleModalVisibility,
  toggleSearchModalVisibility,
  houseData,
}: Props) => {
  const renderItem = ({item}) => <PropertyItem navigation={navigation} {...item} />;
  return (
    <View style={{ width: '100%', flexDirection: 'column' }}>
      <FilterBar toggleModalVisibility={toggleModalVisibility} />
      <FlatList
        data={houseData}
        renderItem={renderItem}
        style={{ padding: 10, height: '85%' }}
      />
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={modalVisible}
        onRequestClose={toggleModalVisibility}
      >
        <FilterModal toggleModalVisibility={toggleModalVisibility} />
      </Modal>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={searchModalVisible}
        onRequestClose={toggleSearchModalVisibility}
      >
        <SearchModal navigation={navigation} toggleSearchModalVisibility={toggleSearchModalVisibility} />
      </Modal>
    </View>
  );
};
