import React, { Component } from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

export default class Press extends Component {
  constructor() {
    super();
    this.state = {
      action: 'init',
    }
    this.onPress=this.onPress.bind(this);
    this.onPressIn=this.onPressIn.bind(this);
    this.onPressOut=this.onPressOut.bind(this);
    this.onLongPress=this.onLongPress.bind(this);
  }

  onPress() {
    this.setState({
      action: 'onPress'
    })
  }
  onPressIn() {
    this.setState({
      action: 'onPressIn'
    })
  }
  onPressOut() {
    this.setState({
      action: 'onPressOut'
    })
  }
  onLongPress() {
    this.setState({
      action: 'onLongPress'
    })
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onLongPress={this.onLongPress}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{this.state.action}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderRadius: 100,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  text: {
    color: 'white',
  }
})
