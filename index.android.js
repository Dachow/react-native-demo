/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';


// import Component
// import MovieList from './src/MovieList';
// import Navigation from './src/Navigation';
// import Alert from './src/Alert';
// import SimpleLayout from './src/Layout';
// import SimpleIndex from './src/simpleIndex/App';
import StopWatch from './src/StopWatch/index';


// main
class AwesomeProject extends Component {
  render() {
    // return <MovieList />
    // return <Navigation />
    // return <Alert />
    // return <SimpleLayout />
    // return <SimpleIndex />
    return <StopWatch />
  }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)

// it's okay
// AppRegistry.registerComponent('AwesomeProject', () => MovieList);
