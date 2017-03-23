import React, { Component } from 'react';
import {View, TextInput, Text, Button} from 'react-native';
// import CookieManager from 'react-native-cookies';
// import LoggedIn from './LoggedIn'

import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const storage = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 1000,

  // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
  // 如果不指定则数据只会保存在内存中，重启后即丢失
  storageBackend: AsyncStorage,

  // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  defaultExpires: 1000 * 3600 * 24,

  // 读写时在内存中缓存数据。默认启用。
  enableCache: true,

  // 如果storage中没有相应数据，或数据已过期，
  // 则会调用相应的sync方法，无缝返回最新数据。
  // sync方法的具体说明会在后文提到
  // 你可以在构造函数这里就写好sync的方法
  // 或是写到另一个文件里，这里require引入
  // 或是在任何时候，直接对storage.sync进行赋值修改
  // sync: require('./sync')
})



export default class Index extends Component {
  constructor() {
    super();

    // TextInput的onChangeText会将输入的信息写入这两个全局变量
    this.username = '';
    this.password = '';

    // state初始信息
    this.state = {
      login: false,
      username: this.username,
      password: this.password
    }

    // 绑定this，以使该方法能在自己的作用于内调用this
    this._onPress = this._onPress.bind(this)
    this._loginOut = this._loginOut.bind(this)
  }

  _onPress() {
    console.log(this.username, this.password)

    // 点击按钮后，写入用户信息到本地存储
    storage.save({
      key: 'loginState',
      rawData: {
        username: this.username,
        password: this.password
      }
    })

    // login置为true是刷新登陆页面，写入username用于在界面即时显示用户名信息
    this.setState({
      login: true,
      username: this.username,
    })
  }

  _loginOut() {
    // 删除登陆信息
    storage.remove({
      key: 'loginState'
    });

    // 回退到登陆前界面
    this.setState({
      login: false
    })
  }

  componentWillMount() {

    // 读取本地登陆信息
    storage.load({
      key: 'loginState',
    }).then( data => {
      if (data) {
        // 如果本地有登陆信息，则写入到state刷新页面到登陆后状态
        this.setState({
          login: true,
          username: data.username,
          password: data.password
        })
      }
    }).catch( err => {
      console.warn(err);
    })
  }

  render() {
    // 根据登陆状态渲染页面
    if (this.state.login) {
      return (
        <View>
          <Text>{this.state.username} 您已登陆</Text>
          <Button
            onPress={this._loginOut}
            title='退出登陆'
          />
        </View>
      )
    } else {
      return (
        <View>
          <TextInput
            placeholder='用户名'
            onChangeText={
              text => {
                this.username = text
              }
            }
          />
          <TextInput
            placeholder='密码'
            onChangeText={
              text => {
                this.password = text
              }
            }
          />
          <Button
            title='post'
            onPress={this._onPress}
          />
        </View>
      )
    }
  }
}
