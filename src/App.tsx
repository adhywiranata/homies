import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import ScreenContainer from './components/core/Container';
import Header from './components/core/Header';
import HomeScreen from './containers/screens/HomeScreen';
import PropertyListScreen from './containers/screens/PropertyListScreen';
import HistoryListScreen from './containers/screens/HistoryListScreen';

const renderScreen = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <ScreenContainer>
          <Header {...this.props} />
          <WrappedComponent {...this.props} />
        </ScreenContainer>
      );
    }
  };
};

export default DrawerNavigator({
  Home: { screen: renderScreen(HomeScreen) },
  Properties: { screen: renderScreen(PropertyListScreen) },
  Histories: { screen: renderScreen(HistoryListScreen) },
});
