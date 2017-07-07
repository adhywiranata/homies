import React from 'react';

import HistoryListScreen from '../components/screens/HistoryListScreen';

export interface Props { navigation: any; }
// export interface State { }

const historyData = [
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

export default class extends React.Component<Props, {}> {
  static navigationOptions = {
    drawerLabel: 'History',
  };
  render() {
    const { navigation } = this.props;
    return (
      <HistoryListScreen
        historyData={historyData}
        navigation={navigation}
      />
    );
  }
}
