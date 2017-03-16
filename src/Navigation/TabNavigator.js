import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';


class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Home',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      /*icon: ({ tintColor }) => (
        <Image
          source={require('./chats-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),*/
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Notifications',
      /*icon: ({ tintColor }) => (
        <Image
          source={require('./notif-icon.png')}
          style={[styles.tabIcon, {tintColor: tintColor}]}
        />
      ),*/
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

// const styles = StyleSheet.create({
//   icon: {
//     width: 26,
//     height: 26,
//   },
// });

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: 'yellow',
    indicatorStyle: {
      color: 'red',
    },
  },
});

export default MyApp;
