import React, {Component} from 'react';
import {Navigator, View, Text, StyleSheet} from 'react-native';


// import component
import Index from './Index';

export default class App extends Component {
    render() {
        return (
                <Navigator
                    initialRoute={{
                        title: '首页',
                    }}
                    renderScene={(route, navigator) =>
                        <Index title={route.title} />
                    }
                // Navigator end
                />
        )
    }
}
