import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Forecast extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.bigText, styles.setBorder]}>{this.props.main}</Text>
        <Text
          style={[styles.mainText, styles.setBorder]}>
          当前天气：{this.props.description}
        </Text>
        <Text style={styles.bigText}>{this.props.temp}°F</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  setBorder: {
    // borderColor: 'yellow',
    // borderWidth: 1,
  },
  // bigText: {
  //   flex: 2,
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  //   color: '#ffffff',
  //   // padding: 20,
  // },
  // mainText: {
  //   flex: 1,
  //   fontSize: 16,
  //   textAlign: 'center',
  //   color: '#ffffff'
  // }
})

