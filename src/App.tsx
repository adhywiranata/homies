import React from 'react';
import { StatusBar, View } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import { colors } from './constants';

import ActionBanner from './components/core/ActionBanner';
import ScreenContainer from './components/core/Container';
import Header from './components/core/Header';

import HistoryListScreen from './containers/screens/HistoryListScreen';
import HomeScreen from './containers/screens/HomeScreen';
import ProfileScreen from './containers/screens/ProfileScreen';
import PropertyDetailScreen from './containers/screens/PropertyDetailScreen';

const renderScreen = (WrappedComponent) => {
  return class extends React.Component<{ navigation: any }, {}> {
    render() {
      return (
        <ScreenContainer>
          <Header {...this.props} />
          <WrappedComponent {...this.props} />
          <ActionBanner />
        </ScreenContainer>
      );
    }
  };
};

const MainHomeNavigator = StackNavigator({
  HomeStack: { screen: renderScreen(HomeScreen ) },
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
