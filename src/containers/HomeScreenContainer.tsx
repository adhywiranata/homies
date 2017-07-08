import axios from 'axios';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import HomeScreen from '../components/screens/HomeScreen';

export interface Props {
  navigation: any;
  searchModalVisible: boolean;
  toggleSearchModalVisibility: any;
}
export interface State {
  propertyData: any;
  modalVisible: boolean;
  displayRumahCategory: boolean;
  isFetchingPropertyData: boolean;
  fetchPropertyDataSuccess: boolean;
}

// const houseData = [
//   {key: 'a'},
//   {key: 'b'},
//   {key: 'c'},
//   {key: 'd'},
//   {key: 'e'},
//   {key: 'f'},
//   {key: 'g'},
//   {key: 'h'},
//   {key: 'i'},
//   {key: 'j'},
//   {key: 'k'},
//   {key: 'l'},
// ];

export default class extends React.Component<Props, State> {
  static navigationOptions = () => ({
    drawerLabel: 'Home',
  })

  constructor() {
    super();
    this.state = {
      propertyData: [],
      modalVisible: false,
      displayRumahCategory: true,
      isFetchingPropertyData: true,
      fetchPropertyDataSuccess: false,
    };

    this.fetchData = this.fetchData.bind(this);
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
    this.toggleRumahCategoryFilter = this.toggleRumahCategoryFilter.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ isFetchingPropertyData: true });
    axios.post('https://us-central1-homies-3aa8b.cloudfunctions.net/api/graphql', {
    query: `
      query Properties {
        properties {
          id
          name
          category
          price
          width
          facilities {
            bedroom
            bathroom
            security
            carSlot
          }
          impressions {
            views
            saves
          }
          images {
            url
          }
        }
      }
    `,
    })
    .then((response) => {
      const properties = response.data.data.properties;
      console.log(properties);
      this.setState({
        propertyData: properties.map(property => ({...property, key: property.id })),
        isFetchingPropertyData: false,
        fetchPropertyDataSuccess: true,
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ isFetchingPropertyData: false, fetchPropertyDataSuccess: false });
    });
  }

  toggleModalVisibility() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  toggleRumahCategoryFilter() {
    this.setState({ displayRumahCategory: !this.state.displayRumahCategory });
  }

  render() {
    const { navigation, searchModalVisible, toggleSearchModalVisibility } = this.props;
    const { propertyData, modalVisible, displayRumahCategory, isFetchingPropertyData, fetchPropertyDataSuccess } = this.state;
    if(isFetchingPropertyData) {
      return <ActivityIndicator size={'large'} style={{ marginTop: 20 }} />
    }
    if(!isFetchingPropertyData && fetchPropertyDataSuccess) {
      return (
        <HomeScreen
          propertyData={propertyData}
          navigation={navigation}
          modalVisible={modalVisible}
          displayRumahCategory={displayRumahCategory}
          toggleRumahCategoryFilter={this.toggleRumahCategoryFilter}
          searchModalVisible={searchModalVisible}
          toggleModalVisibility={this.toggleModalVisibility}
          toggleSearchModalVisibility={toggleSearchModalVisibility}
        />
      );
    }
    if(!isFetchingPropertyData && !fetchPropertyDataSuccess) {
      return (
        <View style={{ alignItems: 'center' }}>
          <Text style={{ margin: 30, textAlign: 'center' }}>
            Ups, sepertinya ada masalah teknis dari sisi kami. {"\n"}
            Silakan reload untuk memproses kembali.
          </Text>
          <TouchableOpacity
            onPress={this.fetchData}
            style={{ borderRadius: 2, borderColor: 'rgba(0,0,0,0.5)', borderWidth: 1, padding: 5 }}
          >
            <Text>Coba Lagi</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  }
}
