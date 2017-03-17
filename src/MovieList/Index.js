import React, { Component } from 'react';
import { ListView, Text, StyleSheet, View } from 'react-native';


import Item from './Item'

// const KEY = '0b2bdeda43b5688921839c8ecb20399b';
// const CITY = '西安';
// const fetchURL = `https://api.douban.com/v2/movie/in_theaters?apikey=${KEY}&city=${CITY}`;
const fetchURL = 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=100'

export default class MovieList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([]),
      loading: true
    }
  }

  componentDidMount() {
    fetch(fetchURL)
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson)
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(resJson.data.movies),
          loading: false
        })
      })
  }

  _renderRow(rowData) {
    return (
      <Item
        name={rowData.nm}
        img={rowData.img}
        date={rowData.rt}
        star={rowData.star}
      />
    )
  }
  _renderHeader() {
    return (
      <View style={[styles.section, styles.header]}>
        <Text style={styles.sectionText}>最热电影</Text>
      </View>
    )
  }
  _renderFoot() {
    return (
      <View style={styles.section}>
        <Text style={[styles.sectionText, styles.footerText]}>完</Text>
      </View>
    )
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loading}>Loading...</Text>
        </View>
      )
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        renderFooter={this._renderFoot}
      />
      // <Text>hello</Text>
    )
  }
}


const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    fontSize: 27,
  },
  section: {
    backgroundColor: '#3796E8',
    padding: 7,
  },
  sectionText: {
    fontSize: 17,
    color: 'white'
  },
  footerText: {
    alignSelf: 'flex-end',
  }
})
