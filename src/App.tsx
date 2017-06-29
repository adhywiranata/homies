import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import ScreenContainer from './components/core/Container';
import ActionBanner from './components/core/ActionBanner';
import Header from './components/core/Header';
import HistoryListScreen from './containers/screens/HistoryListScreen';
import HomeScreen from './containers/screens/HomeScreen';
import PropertyListScreen from './containers/screens/PropertyListScreen';
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

export default DrawerNavigator({
  Home: { screen: renderScreen(HomeScreen) },
  Details: { screen: renderScreen(PropertyDetailScreen) },
  Properties: { screen: renderScreen(PropertyListScreen) },
  Histories: { screen: renderScreen(HistoryListScreen) },
});
