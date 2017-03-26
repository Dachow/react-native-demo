import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Navigator} from 'react-native';

class Myscene extends Component {
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

export default class Navigation extends Component {
    render() {
        return (
          <Navigator 
            initialRoute={{ title: 'Initial scene', index: 0 }}
            renderScene={(route, navigator) =>
            <Myscene 
                title={route.title}

                onForward={() => {
                const nextIndex = route.index + 1;
                navigator.push({
                    title: 'Scene' + nextIndex,
                    index: nextIndex
                })
                }}

                onBack={() => {
                if (route.index > 0) {
                    navigator.pop();
                }
                }}
            // end Myscene
            />
            }  
          // Navigator end
          />
        )
    }
}