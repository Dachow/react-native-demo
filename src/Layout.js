import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Test extends Component {
    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1}}>
                <View style={styles.top}>
                    <View style={styles.topLeft}>
                        <Text>topLeft</Text>
                    </View>
                    <View style={styles.topRight}>
                        <View style={styles.topRightTop}>
                            <Text>topRightTop</Text>
                        </View>
                        <View style={styles.topRightBottom}>
                            <View style={styles.topRightBottomLeft}>
                                <Text>trbl</Text>
                            </View>
                            <View style={styles.topRightBottomRight}>
                                <Text>trbr</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    top: {
        flex: 1,
        flexDirection: 'row',
        // height: '30%'
    },
    topLeft: {
        height: '30%',
        borderWidth: 1,
        borderColor: 'blue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topRight: {
        height: '30%',
        borderWidth: 1,
        borderColor: 'blue',
        flex: 2,
    },
    topRightTop: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topRightBottom: {
        flex: 1,
        flexDirection: 'row', 
        borderWidth: 1,
        borderColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topRightBottomLeft: {
        borderColor: 'blue',
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    topRightBottomRight: {
        flex: 1,
        borderColor: 'blue',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    }


    // reduce codes

})