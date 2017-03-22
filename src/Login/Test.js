import React, { Component } from 'react';
import { WebView, View, BackAndroid } from 'react-native';


export default class WebviewTest extends Component {
  constructor() {
    super();
    this.state = {
      bg: undefined
    }
  }

  _onNavChange(e) {
    console.log('on nav change: ' + this.state.bg)
    // console.log(e)
    if (e.url != 'https://www.baidu.com/') {
      this.setState({
        bg: 'red'
      })
    }

  }

  componentDidMount() {
    console.log('on ComponentDidMount: ' + this.state.bg)
        BackAndroid.addEventListener('hardwareBackPress',function(){
          if (this.state.bg != '') {
            this.setState({
              bg: 'blue'
            })
            return true;
          }
          return false;
        }.bind(this));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: 'https://www.baidu.com/'}}
          onNavigationStateChange={this._onNavChange.bind(this)}
          injectedJavaScript="window.postMessage"
          style={{flex: 1}}
        />
        <View style={{flex: 1, backgroundColor: this.state.bg}}
        />
      </View>

    )
  }
}
