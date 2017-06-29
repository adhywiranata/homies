import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './containers/screens/HomeScreen';
import PropertyListScreen from './containers/screens/PropertyListScreen';
import HistoryListScreen from './containers/screens/HistoryListScreen';

const TabScreenNavigator = TabNavigator({
  Properties: { screen: PropertyListScreen },
  Histories: { screen: HistoryListScreen }
})
export default StackNavigator({
  Home: { screen: HomeScreen },
  Properties: { screen: TabScreenNavigator },
});
