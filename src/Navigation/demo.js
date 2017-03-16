import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';



class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lily' })}
          title="Chat with Lily"
        />
      </View>
    )
  }


}

class AllContactsScreen extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    )
  }
}
class OtherContactsScreen extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Me' })}
          title="Chat with Me"
        />
      </View>
    )
  }
}

// tab view
const MainScreenNavigator = TabNavigator({
  Tab1: { screen: RecentChatsScreen },
  Tab2: { screen: AllContactsScreen },
  Tab3: { screen: OtherContactsScreen },
});


MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: ({ state }) => {
      if (state.params.mode === 'info') {
        return `${state.params.user}'s Contact Info`;
      }
      return `Chat with ${state.params.user}`;
    },
    header: ({ state, setParams }) => {
      // The navigation prop has functions like setParams, goBack, and navigate.
      // 初始化mode无值，右边按钮为xx's info，左边title为chat with xx
      // 点击后mode设置为info，左边title变为xx's contact info， 右边按钮为done
      let right = (
        <Button
          title={`${state.params.user}'s info`}
          onPress={() => setParams({ mode: 'info' })}
        />
      );
      if (state.params.mode === 'info') {
        right = (
          <Button
            title="Done"
            onPress={() => setParams({ mode: 'none' })}
          />
        );
      }
      return { right };
    },
}
  render() {
      const { params } = this.props.navigation.state;
      return <Text>Chat with {params.user}</Text>;
  }
}

export default StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
})
