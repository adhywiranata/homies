import React from 'react';
import { FlatList, Modal, View } from 'react-native';

import FilterBar from '../property/FilterBar';
import FilterModal from '../property/FilterModal';
import PropertyItem from '../property/Item';
import SearchModal from '../property/SearchModal';

interface Props {
  navigation: any;
  isRefreshingPropertyData: boolean;
  refreshList: any;
  modalVisible: boolean;
  displayRumahCategory: boolean;
  searchModalVisible: boolean;
  toggleModalVisibility: any;
  toggleRumahCategoryFilter: any;
  toggleSearchModalVisibility: any;
  propertyData: any;
}

export default ({
  navigation,
  modalVisible,
  isRefreshingPropertyData,
  refreshList,
  displayRumahCategory,
  searchModalVisible,
  toggleModalVisibility,
  toggleRumahCategoryFilter,
  toggleSearchModalVisibility,
  propertyData,
}: Props) => {
  const renderItem = ({ item }) => {
    return <PropertyItem navigation={navigation} property={item} />
  };
  return (
    <View style={{ width: '100%', flexDirection: 'column' }}>
      <FilterBar
        toggleModalVisibility={toggleModalVisibility}
      />
      <FlatList
        data={propertyData}
        renderItem={renderItem}
        refreshing={isRefreshingPropertyData}
        onRefresh={refreshList}
        keyExtractor={item => item.id}
        style={{ width: '100%', height: '85%', flexDirection: 'column' }}
      />
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={modalVisible}
        onRequestClose={toggleModalVisibility}
      >
        <FilterModal
          displayRumahCategory={displayRumahCategory}
          toggleModalVisibility={toggleModalVisibility}
          toggleRumahCategoryFilter={toggleRumahCategoryFilter}
        />
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
