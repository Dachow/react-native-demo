import React, { Component } from 'react';
import { Button, CameraRoll, Image, ScrollView, StyleSheet, View } from 'react-native';


// get the newest picture in your Photos
export default class Camera extends Component {
  constructor() {
    super();
    this.state = {
      img: '',
      imgs: []
    }
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    CameraRoll.getPhotos(
      // 数字代表取几张照片
      {first: 5},
      data => {
        console.log(data);
        this.setState({
          img: data.edges[0].node.image.uri,
          imgs: data.edges
        })
      },
      error => {
        console.warn(error);
      }
    )
  }

  render() {
    const images = this.state.imgs.map( (item, idx) => (
      <View style={styles.otherContainer}>
        <Image
          source={{uri: item.node.image.uri}}
          style={[{width: 150, height: 250}, styles.other]}
          key={idx}
        />
      </View>
    ))
    return (
      <ScrollView style={styles.container}>
        <Image
          source={{uri: this.state.img}}
          style={[{width: 100, height: 200}, styles.one]}
        />
        {/*数组*/}
        {images}
        <Button
          title='Pick An Image'
          onPress={this._onPress}
        />
      </ScrollView>
    )
  }
}

// TODO 怎样制定每行显示的个数

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  one: {
    marginBottom: 10,
  },
  otherContainer: {
    flexDirection: 'row',
  },
  other: {
    flex: 1
  }
})
