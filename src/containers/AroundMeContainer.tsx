import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

export interface Props { navigation: any; }
export interface State { region: any; userMarker: any; markers: any }

export default class extends React.Component<Props, State> {
  static navigationOptions = () => ({
    drawerLabel: 'Around Me',
  })

  constructor() {
    super();
    this.state = {
      region: {
        latitude: -6.1754,
        longitude: 106.8272,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      userMarker: {},
      markers: [
        {
          key: 1,
          latlng: {
            latitude: -6.6244285,
            longitude: 106.7967039,
          },
          title: 'wow',
          description: 'ueah',
        },
        {
          key: 2,
          latlng: {
            latitude: -6.6444285,
            longitude: 106.7967039,
          },
          title: 'wow',
          description: 'ueah',
        },
        {
          key: 3,
          latlng: {
            latitude: -6.6244285,
            longitude: 106.7987039,
          },
          title: 'wow',
          description: 'ueah',
        },
      ],
    };

    this.fetchLocation = this.fetchLocation.bind(this);
  }

  componentDidMount() {
    this.fetchLocation();
  }

  fetchLocation() {
    navigator.geolocation.getCurrentPosition((position: any) => {
      this.setState({
        region: {
          ...this.state.region,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        },
        userMarker: {
          latlng: {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          },
        },
      });
    }, (error) => {
        alert(JSON.stringify(error))
    }, {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
    });
  }

  render() {
    const { region, userMarker, markers } = this.state;
    return (
      <View style={{ width: '100%', flex: 1 }}>
        <MapView
          style={{ width: '100%', height: '100%' }}
          initialRegion={region}
          region={region}
        >
          { userMarker.latlng && (
            <MapView.Marker
              coordinate={userMarker.latlng}
              title={'me'}
              description={'me'}
              pinColor={'#9B59B6'}
            />
          )}
          { markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
