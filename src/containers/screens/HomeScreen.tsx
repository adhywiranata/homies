import React from 'react';
import { FlatList, Modal, View } from 'react-native';

import FilterBar from '../../components/property/FilterBar';
import FilterModal from '../../components/property/FilterModal';
import PropertyItem from '../../components/property/Item';
import SearchModal from '../../components/property/SearchModal';

export interface Props {
  navigation: any;
  searchModalVisible: boolean;
  toggleSearchModalVisibility: any;
}
export interface State { modalVisible: boolean; }

const houseData = [
  {key: 'a'},
  {key: 'b'},
  {key: 'c'},
  {key: 'd'},
  {key: 'e'},
  {key: 'f'},
  {key: 'g'},
  {key: 'h'},
  {key: 'i'},
  {key: 'j'},
  {key: 'k'},
  {key: 'l'},
];

export default class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = () => ({
    drawerLabel: 'Home',
  })

  constructor() {
    super();
    this.state = {
      modalVisible: false,
    };

    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
  }

  toggleModalVisibility() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    const { navigation, searchModalVisible, toggleSearchModalVisibility } = this.props;
    const { modalVisible } = this.state;
    const renderItem = ({item}) => <PropertyItem navigation={navigation} {...item} />;
    return (
      <View style={{ width: '100%', flexDirection: 'column' }}>
        <FilterBar toggleModalVisibility={this.toggleModalVisibility} />
        <FlatList
          data={houseData}
          renderItem={renderItem}
          style={{ padding: 10, height: '84.5%' }}
        />
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={modalVisible}
          onRequestClose={this.toggleModalVisibility}
        >
          <FilterModal toggleModalVisibility={this.toggleModalVisibility} />
        </Modal>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={searchModalVisible}
          onRequestClose={toggleSearchModalVisibility}
        >
          <SearchModal toggleSearchModalVisibility={toggleSearchModalVisibility} />
        </Modal>
      </View>
    );
  }
}
