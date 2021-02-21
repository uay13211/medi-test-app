import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import constants from '../constants'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    ratioButtonBg: (selected) => ({
        width: 25,
        height: 25,
        borderRadius: 1000,
        borderColor: selected ? constants.blue : constants.grey,
        borderWidth: 2,
        backgroundColor: constants.grey,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    ratioButton: (selected) => ({
        width: 16,
        height: 16,
        borderRadius: 1000,
        backgroundColor: selected ? constants.blue : constants.grey
    }),
    title: {
        color: constants.deepGrey,
        fontSize: 16,
        fontWeight: "500",
        marginRight: 15
    }
})

const RatioButton = ({
    style,
    title,
    selected,
    onPress
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity 
                onPress={onPress} 
                style={[styles.ratioButtonBg(selected), style]}>
                    <View style={styles.ratioButton(selected)}/>
            </TouchableOpacity>
        </View>
    )
}

export default RatioButton