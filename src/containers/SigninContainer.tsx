import React from 'react';
import { Text, View } from 'react-native';
import {
  LoginButton,
  AccessToken,
} from 'react-native-fbsdk';

export interface Props { navigation: any; }

export default class extends React.Component<Props, {}> {
  static navigationOptions = () => ({
    drawerLabel: 'Sign In',
  })
  render() {
    return (
      <View>
        <Text>
          SIGN IN
        </Text>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}
