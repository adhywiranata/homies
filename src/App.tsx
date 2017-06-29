import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import ActionBanner from './components/core/ActionBanner';
import ScreenContainer from './components/core/Container';
import Header from './components/core/Header';
import HistoryListScreen from './containers/screens/HistoryListScreen';
import HomeScreen from './containers/screens/HomeScreen';
import PropertyDetailScreen from './containers/screens/PropertyDetailScreen';
import PropertyListScreen from './containers/screens/PropertyListScreen';

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

export default DrawerNavigator({
  Home: { screen: renderScreen(HomeScreen) },
  Main: { screen: MainHomeNavigator },
  Details: { screen: renderScreen(PropertyDetailScreen) },
  Properties: { screen: renderScreen(PropertyListScreen) },
  Histories: { screen: renderScreen(HistoryListScreen) },
});
