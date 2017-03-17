import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


export default class GetLocation extends Component {
  constructor() {
   super();
   this.state = {
      latitude: '',
      longitude: '',
      accuracy: '',
      altitude: '',
      altitudeAccuracy: '',
      heading: '',
      speed: '',
   }
   this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        this.setState({
          latitude: initialPosition.coords.latitude,
          longitude: initialPosition.coords.longitude,
          accuracy: initialPosition.coords.accuracy,
          altitude: initialPosition.coords.altitude,
          altitudeAccuracy: initialPosition.coords.altitudeAccuracy,
          heading: initialPosition.coords.heading,
          speed: initialPosition.coords.speed,
        })
      },
      (error) => {
        alert(error.message)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 1000
      }
    )
  }

  render() {
    return (
      <View>
        <Text>latitude: {this.state.latitude}</Text>
        <Text>longitude: {this.state.longitude}</Text>
        <Text>accuracy: {this.state.accuracy}</Text>
        <Text>altitude: {this.state.altitude}</Text>
        <Text>altitudeAccuracy: {this.state.altitudeAccuracy}</Text>
        <Text>heading: {this.state.heading}</Text>
        <Text>speed: {this.state.heading}</Text>

          {/*label属性没用*/}
        <Button
          title='Get Location!'
          label='GetLocation'
          onPress={this._onPress}
        />
      </View>
    )
  }
}
