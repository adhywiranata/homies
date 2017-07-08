import React from 'react';
import { StatusBar, View } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import { colors } from './constants';

import ActionBanner from './components/core/ActionBanner';
import ScreenContainer from './components/core/Container';
import Header from './components/core/Header';

import SigninContainer from './containers/SigninContainer';
import HistoryListScreenContainer from './containers/HistoryListScreenContainer';
import HomeScreenContainer from './containers/HomeScreenContainer';
import ProfileScreenContainer from './containers/ProfileScreenContainer';
import AroundMeContainer from './containers/AroundMeContainer';
import PropertyDetailScreenContainer from './containers/PropertyDetailScreenContainer';

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
  DetailsStack: { screen: renderScreen(PropertyDetailScreenContainer) },
}, {
  navigationOptions: {
    header: null,
  },
});

const MainNavigator = DrawerNavigator({
  Signin: { screen: SigninContainer },
  Home: { screen: MainHomeNavigator },
  Profile: { screen: renderScreen(ProfileScreenContainer) },
  History: { screen: renderScreen(HistoryListScreenContainer) },
  MapAroundMe: { screen: renderScreen(AroundMeContainer) },
  ScoutPlanner: { screen: renderScreen(HistoryListScreenContainer) },
  BeASeller: { screen: renderScreen(HistoryListScreenContainer) },
  Logout: { screen: renderScreen(HistoryListScreenContainer) },
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
