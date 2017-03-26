/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, ListView} from 'react-native';

// several data
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExampl' +
    'e.json';

// var MOCKED_MOVIES_DATA = [   {     title: '标题',     year: '2015', posters: {
//      thumbnail: 'http://i.imgur.com/UePbdph.jpg'     }   } ];

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this
      .fetchData
      .bind(this);
    this.state = {
      loaded: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(Response => Response.json())
      .then(ResponseData => {
        // console.log(ResponseData);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(ResponseData.movies),
          loaded: true
        })
      })
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据。。。
        </Text>
      </View>
    )
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={ {uri: movie.posters.thumbnail} }
          style={ styles.thumbnail }
        ></Image>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    )
  }

  render() {
    // const movie = MOCKED_MOVIES_DATA[0];
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    // console.log(this.state.movies[0]);
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      >
      </ListView>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  rightContainer: {
    flex: 1
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
   listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
})
