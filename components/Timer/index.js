import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button'

export default class Timer extends Component {
    render() {
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.timeView}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button iconName="play-circle" onPress={() => alert('play')} />
                    <Button iconName="stop-circle" onPress={() => alert('stop')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    timeView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
});