import { StackNavigator, DrawerNavigator } from 'react-navigation';

import HomeScreen from './containers/screens/HomeScreen';
import PropertyListScreen from './containers/screens/PropertyListScreen';
import HistoryListScreen from './containers/screens/HistoryListScreen';

export default DrawerNavigator({
  Properties: { screen: PropertyListScreen },
  Histories: { screen: HistoryListScreen },
});

// export default StackNavigator({
//   Properties: { screen: drawerScreenNavigator },
//   Home: { screen: HomeScreen },
// }, {
// navigationOptions: {
//   headerTintColor: 'transparent',
//   headerMode: 'screen',
// });
