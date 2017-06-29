import { StackNavigator, DrawerNavigator } from 'react-navigation';

import HomeScreen from './containers/screens/HomeScreen';
import PropertyListScreen from './containers/screens/PropertyListScreen';
import HistoryListScreen from './containers/screens/HistoryListScreen';

export default DrawerNavigator({
  Home: { screen: HomeScreen },
  Properties: { screen: PropertyListScreen },
  Histories: { screen: HistoryListScreen },
});
