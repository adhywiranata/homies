import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

export interface Props { navigation: any; }
export interface State { initialRegion: any; }

export default class extends React.Component<Props, State> {
  static navigationOptions = () => ({
    drawerLabel: 'Around Me',
  })

  constructor() {
    super();
    this.state = {
      initialRegion: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position: any) => {
      this.setState({
        initialRegion: {
          longitude: position.longitude,
          latitude: position.latitude,
        }});
  }, (error) => {
      alert(JSON.stringify(error))
  }, {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
  });
  }

  render() {
    const { initialRegion } = this.state;
    return (
      <View style={{ width: '100%', flex: 1 }}>
        <MapView
          style={{ width: '100%', height: '100%' }}
          initialRegion={initialRegion}
        />
      </View>
    );
  }
}
