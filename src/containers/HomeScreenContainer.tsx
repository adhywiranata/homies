import axios from 'axios';
import React from 'react';

import HomeScreen from '../components/screens/HomeScreen';

export interface Props {
  navigation: any;
  searchModalVisible: boolean;
  toggleSearchModalVisibility: any;
}
export interface State {
  modalVisible: boolean;
  displayRumahCategory: boolean;
}

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

export default class extends React.Component<Props, State> {
  static navigationOptions = () => ({
    drawerLabel: 'Home',
  })

  constructor() {
    super();
    this.state = {
      modalVisible: false,
      displayRumahCategory: true,
    };

    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
    this.toggleRumahCategoryFilter = this.toggleRumahCategoryFilter.bind(this);
  }

  componentDidMount() {
    axios.post('https://us-central1-homies-3aa8b.cloudfunctions.net/api/graphql', {
    query: `
      query Properties {
        properties {
          id
          name
          description
          category
          price
          facilities {
            bedroom
            bathroom
            security
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
  })
  .catch((error) => {
    console.log(error);
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
    const { modalVisible, displayRumahCategory } = this.state;
    return (
      <HomeScreen
        houseData={houseData}
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
}
