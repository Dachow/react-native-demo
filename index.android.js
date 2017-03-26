/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import App from './src/entry'

// main
export default class AwesomeProject extends Component {
  render() {
    return (
      <App />
    )
  }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)

// it's okay
// AppRegistry.registerComponent('AwesomeProject', () => MovieList);
