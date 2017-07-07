import React from 'react';
import { StatusBar, View } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import { colors } from './constants';

import ActionBanner from './components/core/ActionBanner';
import ScreenContainer from './components/core/Container';
import Header from './components/core/Header';

import HistoryListScreen from './containers/screens/HistoryListScreen';
import HomeScreenContainer from './containers/HomeScreenContainer';
import ProfileScreen from './containers/screens/ProfileScreen';
import PropertyDetailScreen from './containers/screens/PropertyDetailScreen';

interface Props {
  navigation: any;
}
interface State {
  searchModalVisible: boolean;
  actionBannerVisible: boolean;
}

const renderScreen = (WrappedComponent) => {
  return class extends React.Component<Props, State> {
    constructor() {
      super();
      this.state = {
        searchModalVisible: false,
        actionBannerVisible: false,
      };

      this.toggleSearchModalVisibility = this.toggleSearchModalVisibility.bind(this);
    }

    toggleSearchModalVisibility() {
      this.setState({ searchModalVisible: !this.state.searchModalVisible });
    }

    render() {
      return (
        <ScreenContainer>
          <Header {...this.props} toggleSearchModalVisibility={this.toggleSearchModalVisibility} />
          <WrappedComponent
            {...this.props}
            searchModalVisible={this.state.searchModalVisible}
            toggleSearchModalVisibility={this.toggleSearchModalVisibility}
          />
          {this.state.actionBannerVisible && <ActionBanner />}
        </ScreenContainer>
      );
    }
  };
};

const MainHomeNavigator = StackNavigator({
  HomeStack: { screen: renderScreen(HomeScreenContainer) },
  DetailsStack: { screen: renderScreen(PropertyDetailScreen) },
}, {
  navigationOptions: {
    header: null,
  },
});

const MainNavigator = DrawerNavigator({
  Home: { screen: MainHomeNavigator },
  Profile: { screen: renderScreen(ProfileScreen) },
  History: { screen: renderScreen(HistoryListScreen) },
  ScoutPlanner: { screen: renderScreen(HistoryListScreen) },
  BeASeller: { screen: renderScreen(HistoryListScreen) },
  Logout: { screen: renderScreen(HistoryListScreen) },
});

export default () => (
  <View style={{ flex: 1 }}>
    <StatusBar
       backgroundColor={colors.darkPurple}
       barStyle={'light-content'}
    />
    <MainNavigator />
  </View>
);
