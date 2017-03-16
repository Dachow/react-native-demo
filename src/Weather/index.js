import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';

import Forecast from './Forecast';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cityName: '',
      forecast: null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

  }

  handleChange(e) {
    const cityName = e.nativeEvent.text || 'xian';
    this.setState({
      cityName: cityName
    })
    const KEY = 'ad26088aaf37c853a90b2fa509e228a1';
    const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${KEY}`;

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          forecast: {
            main: resJson.weather[0].main,
            description: resJson.weather[0].description,
            temp: resJson.main.temp
          }
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    // console.log(this.state.forecast)
    let content = null;
    if (this.state.forecast !== null) {
      const { main, description, temp } = this.state.forecast;
      content = <Forecast
                  style={styles.forecast}
                  main={main}
                  description={description}
                  temp={temp}
                />
    }
    return (
      <View style={styles.container}>
        <Image source={require('../images/flowers.png')}
          style={styles.backdrop}
          >
          {/*<View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>当前城市：{this.state.cityName}</Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  returnKeyType='go'
                  onSubmitEditing={this.handleChange}
                />
              </View>
            </View>
            {content}
          </View>*/}
          <Text>Hello</Text>
        </Image>
      </View>
    )
  }
}

var baseFontSize = 16;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // paddingTop: 30,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
  },
  overlay: {
    // flex: 1,
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    // alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'nowrap',
    // alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  // zipCode: {
  //   width: 50,
  //   height: baseFontSize,
  // },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#ffffff',
  }
})
