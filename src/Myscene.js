import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class Myscene extends Component {
    static defaultProps = {
        title: 'Myscene'
    }

    render() {
        return (
            <View>
                <Text>i! My name is {this.props.title}.</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>下一页</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>上一页</Text>
                </TouchableHighlight>
            </View>
        )
    }
}