import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default class Item extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.left}>
          <Image source={{uri: this.props.img}} style={styles.img} />
        </View>
        <View style={styles.right}>
          <View style={styles.rightUp}>
            <Text style={styles.name}>{this.props.name}</Text>
            <Text style={styles.star}>{this.props.star}</Text>
          </View>
          <View style={styles.rightBottom}>
            <Text style={styles.date}>{this.props.date}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    // flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'rgba(128, 128, 128, .1)',
    borderBottomWidth: 2,
    padding: 7,
  },
  left: {
    flex: 1
  },
  right: {
    marginLeft: 10,
    flex: 2,
    flexDirection: 'column'
  },
  img: {
    width: '100%',
    height: 100,
    borderRadius: 3,
  },
  rightUp: {
    flex: 2,
  },
  rightBottom: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // borderWidth: 1,
    // borderColor: 'red'
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 3,
  },
  star: {
    paddingTop: 2,
  }
})
