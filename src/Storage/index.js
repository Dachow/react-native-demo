import React, { Component } from 'react';
import { TextInput, Button, AsyncStorage, Text, View } from 'react-native';


const STORAGE_KEY = '@Storage:text'

export default class Storage extends Component {

    constructor() {
      super();
      this.state = {
        localValue: ''
      }
      this._onChange = this._onChange.bind(this);
      this._onPress = this._onPress.bind(this);
    }

  //读取
  _onPress() {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((value) => {
        if (value !== null) {
          this.setState({
            localValue: value,
          })
        }
      })
      .catch(error => {
        console.warn(error);
      })
  }

  //保存
  _onChange(e) {
    const text = e.nativeEvent.text;
    AsyncStorage.setItem(STORAGE_KEY, text)
      .then(() => {
        console.log('saved ' + text);
      })
      .catch(error => {
        console.warn(error);
      })

  }

  render() {
                  //     returnKeyType='go'
                  // onSubmitEditing={this.handleChange
    return (
      <View>
        <Text>已读取：{this.state.localValue}</Text>
        {/*回车后触发*/}
        <TextInput
          onSubmitEditing={this._onChange}
        />
        <Button
          onPress={this._onPress}
          title='点我读取'
        />
      </View>
    )
  }
}
