/**
 * @flow
 */

import React from 'react';
import {
  Button,
  ScrollView,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import SampleText from './SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  //渲染页面各组件，点击触发后跳转到对应页面
  <ScrollView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <Button
      onPress={() => navigation.navigate('Photos', { name: 'Jane' })}
      title="Go to a photos screen"
    />
    <Button
      onPress={() => navigation.goBack(null)}
      title="Go back"
    />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  // 调用MyNavScreen
  <MyNavScreen
    banner="Home Screen"
    navigation={navigation}
  />
);
MyHomeScreen.navigationOptions = {
  title: 'Welcome',
};

const MyPhotosScreen = ({ navigation }) => (
  <MyNavScreen
    // 参数取自调用时传递的name
    banner={`${navigation.state.params.name}'s Photos`}
    navigation={navigation}
  />
);
MyPhotosScreen.navigationOptions = {
  title: 'Photos',
};

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={
      `${navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''
      }${navigation.state.params.name}'s Profile`
    }
    navigation={navigation}
  />
);
MyProfileScreen.navigationOptions = {
  header: ({ state, setParams }) => ({
    title: `${state.params.name}'s Profile!`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    right: (
      <Button
        title={state.params.mode === 'edit' ? 'Done' : 'Edit'}
        onPress={() => setParams({ mode: state.params.mode === 'edit' ? '' : 'edit' })}
      />
    ),
  }),
};

const SimpleStack = StackNavigator({
  // 首页组件放第一个
  // When `MyHomeScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    // path: 'people/:name',
    screen: MyProfileScreen,
  },
  Photos: {
    // path: 'photos/:name',
    screen: MyPhotosScreen,
    navigationOptions: {
      // 权重较高
      title: ({state}) => `${state.params.name}'s Photoxxxx'`,
    },
  },
});

export default SimpleStack;
